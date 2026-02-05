import bcrypt from "bcrypt";
import jwt, { SignOptions } from "jsonwebtoken";
import crypto from "crypto";
import nodemailer from "nodemailer";
import { client } from "../lib/prisma";
import { ApiError } from "../utils/ApiError";
import { HttpStatus } from "../types/api";
import { EnvVariables } from "../types/common";
import type {
  RegisterRequest,
  LoginRequest,
  ChangePasswordRequest,
} from "../types/request/Auth.requests";
import type { AuthTokens, JWTPayload } from "../types/auth";

const SALT_ROUNDS = 10;

export class AuthService {
  /**
   * Register a new user
   */
  static async register(
    data: RegisterRequest & {
      firstname: string;
      lastname?: string;
      dob: Date;
      gender: string;
    },
  ) {
    // Check if user already exists
    const existingUser = await client.user.findFirst({
      where: {
        OR: [{ email: data.email }, { username: data.username }],
      },
    });

    if (existingUser) {
      throw new ApiError(
        HttpStatus.CONFLICT,
        "User with this email or username already exists",
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);

    // Create person and user
    const person = await client.person.create({
      data: {
        firstname: data.firstname,
        lastname: data.lastname,
        dob: new Date(data.dob),
        gender: data.gender,
      },
    });

    const user = await client.user.create({
      data: {
        email: data.email,
        username: data.username,
        password: hashedPassword,
        personId: person.id,
      },
      include: {
        person: true,
      },
    });

    // Generate tokens
    const tokens = this.generateTokens(user.id);

    // Update refresh token in database
    await client.user.update({
      where: { id: user.id },
      data: { refreshToken: tokens.refreshToken },
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      },
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  }

  /**
   * Login user
   */
  static async login(data: LoginRequest) {
    const loginData = data as any;

    let user;
    if ("email" in loginData && loginData.email) {
      user = await client.user.findFirst({
        where: { email: loginData.email },
      });
    } else {
      user = await client.user.findFirst({
        where: { username: loginData.username },
      });
    }

    if (!user) {
      throw new ApiError(HttpStatus.UNAUTHORIZED, "Invalid credentials");
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(
      loginData.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new ApiError(HttpStatus.UNAUTHORIZED, "Invalid credentials");
    }

    // Generate tokens
    const tokens = this.generateTokens(user.id);

    // Update refresh token
    await client.user.update({
      where: { id: user.id },
      data: { refreshToken: tokens.refreshToken },
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      },
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  }

  /**
   * Logout user
   */
  static async logout(userId: string) {
    await client.user.update({
      where: { id: userId },
      data: { refreshToken: null },
    });

    return { id: userId };
  }

  /**
   * Change password
   */
  static async changePassword(userId: string, data: ChangePasswordRequest) {
    const user = await client.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new ApiError(HttpStatus.NOT_FOUND, "User not found");
    }

    // Verify current password
    const isPasswordValid = await bcrypt.compare(
      data.currentPassword,
      user.password,
    );
    if (!isPasswordValid) {
      throw new ApiError(
        HttpStatus.UNAUTHORIZED,
        "Current password is incorrect",
      );
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(data.newPassword, SALT_ROUNDS);

    // Update password
    await client.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    return { id: userId };
  }

  /**
   * Refresh access token
   */
  static async refreshAccessToken(refreshToken: string) {
    try {
      const payload = jwt.verify(
        refreshToken,
        EnvVariables.REFRESH_TOKEN_SECRET,
      ) as JWTPayload;

      const user = await client.user.findUnique({
        where: { id: payload.userId },
      });

      if (!user || user.refreshToken !== refreshToken) {
        throw new ApiError(HttpStatus.UNAUTHORIZED, "Invalid refresh token");
      }

      const tokens = this.generateTokens(user.id);

      // Update refresh token
      await client.user.update({
        where: { id: user.id },
        data: { refreshToken: tokens.refreshToken },
      });

      return { accessToken: tokens.accessToken };
    } catch (error) {
      throw new ApiError(HttpStatus.UNAUTHORIZED, "Invalid refresh token");
    }
  }

  /**
   * Generate access and refresh tokens
   */
  private static generateTokens(userId: string): AuthTokens {
    const accessTokenSecret = EnvVariables.ACCESS_TOKEN_SECRET as string;
    const refreshTokenSecret = EnvVariables.REFRESH_TOKEN_SECRET as string;
    const accessTokenExpiry = EnvVariables.ACCESS_TOKEN_EXPIRY as string;
    const refreshTokenExpiry = EnvVariables.REFRESH_TOKEN_EXPIRY as string;

    const accessToken = jwt.sign({ userId }, accessTokenSecret, {
      expiresIn: accessTokenExpiry,
    } as SignOptions);

    const refreshToken = jwt.sign({ userId }, refreshTokenSecret, {
      expiresIn: refreshTokenExpiry,
    } as SignOptions);

    // Calculate expiration dates
    const accessTokenExpiresAt = new Date(
      Date.now() + this.parseExpiryTime(accessTokenExpiry) * 1000,
    );
    const refreshTokenExpiresAt = new Date(
      Date.now() + this.parseExpiryTime(refreshTokenExpiry) * 1000,
    );

    return {
      accessToken,
      refreshToken,
      accessTokenExpiresAt,
      refreshTokenExpiresAt,
    };
  }

  /**
   * Parse expiry time string to seconds
   */
  private static parseExpiryTime(time: string): number {
    const units: Record<string, number> = {
      s: 1,
      m: 60,
      h: 3600,
      d: 86400,
    };
    const match = time.match(/^(\d+)([smhd])$/);
    if (!match) return 3600; // default 1 hour
    return parseInt(match[1]) * (units[match[2]] || 1);
  }

  /**
   * Verify JWT token
   */
  static verifyAccessToken(token: string): JWTPayload {
    try {
      return jwt.verify(token, EnvVariables.ACCESS_TOKEN_SECRET) as JWTPayload;
    } catch (error) {
      throw new ApiError(HttpStatus.UNAUTHORIZED, "Invalid or expired token");
    }
  }

  /**
   * Forgot password - generate reset token and send email
   */
  static async forgotPassword(email: string) {
    const user = await client.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new ApiError(HttpStatus.NOT_FOUND, "User not found");
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    const resetTokenExpiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    // Save hashed token to database
    await client.user.update({
      where: { id: user.id },
      data: {
        passwordResetToken: hashedToken,
        passwordResetExpiry: resetTokenExpiry,
      },
    });

    // Send email with reset link
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;
    await this.sendResetEmail(user.email, resetUrl);

    return { message: "Password reset email sent successfully" };
  }

  /**
   * Reset password - verify token and update password
   */
  static async resetPassword(token: string, newPassword: string) {
    // Hash the token to compare with database
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await client.user.findFirst({
      where: {
        passwordResetToken: hashedToken,
        passwordResetExpiry: {
          gt: new Date(), // Check if token is not expired
        },
      },
    });

    if (!user) {
      throw new ApiError(
        HttpStatus.UNAUTHORIZED,
        "Invalid or expired reset token",
      );
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password and clear reset token
    await client.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        passwordResetToken: null,
        passwordResetExpiry: null,
      },
    });

    return { id: user.id };
  }

  /**
   * Send password reset email
   */
  private static async sendResetEmail(email: string, resetUrl: string) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail", // You can configure this in env
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Password Reset Request",
        html: `
          <h1>Password Reset Request</h1>
          <p>Click the link below to reset your password. This link is valid for 15 minutes.</p>
          <a href="${resetUrl}">Reset Password</a>
          <p>If you didn't request this, please ignore this email.</p>
        `,
      };

      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
      // Don't throw error, silently fail but the token was still created
    }
  }

  /**
   * Check if username is unique
   */
  static async checkUsernameUnique(username: string) {
    const user = await client.user.findUnique({
      where: { username },
    });

    return {
      isUnique: !user,
      username,
    };
  }
