import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError";
import { HttpStatus } from "../types/api";
import asyncHandler from "../utils/asyncHandler";
import {
  validateRegister,
  validateLogin,
  validateChangePassword,
  validateForgotPassword,
  validateResetPassword,
} from "../validation/auth.validation";
import { logger } from "../lib/logger";

export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const validatedData = validateRegister(req.body);

    const result = await AuthService.register({
      ...validatedData,
    });

    res
      .status(HttpStatus.CREATED)
      .cookie("accessToken", result.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      })
      .cookie("refreshToken", result.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      })
      .json(
        new ApiResponse(
          HttpStatus.CREATED,
          "User registered successfully",
          result,
        ),
      );
  },
);

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const validatedData = validateLogin(req.body);

  const result = await AuthService.login(validatedData);

  res
    .status(HttpStatus.OK)
    .cookie("accessToken", result.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    })
    .cookie("refreshToken", result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    })
    .json(new ApiResponse(HttpStatus.OK, "Login successful", result));
});

export const logoutUser = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user) {
    throw new ApiError(HttpStatus.UNAUTHORIZED, "User not authenticated");
  }

  const result = await AuthService.logout(req.user.id);

  res
    .status(HttpStatus.OK)
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .json(new ApiResponse(HttpStatus.OK, "Logout successful", result));
});

export const changePassword = asyncHandler(
  async (req: Request, res: Response) => {
    if (!req.user) {
      throw new ApiError(HttpStatus.UNAUTHORIZED, "User not authenticated");
    }

    const validatedData = validateChangePassword(req.body);

    const result = await AuthService.changePassword(req.user.id, validatedData);

    res
      .status(HttpStatus.OK)
      .json(
        new ApiResponse(HttpStatus.OK, "Password changed successfully", result),
      );
  },
);

export const forgotPassword = asyncHandler(
  async (req: Request, res: Response) => {
    const { email } = validateForgotPassword(req.body);

    const result = await AuthService.forgotPassword(email);

    res
      .status(HttpStatus.OK)
      .json(
        new ApiResponse(
          HttpStatus.OK,
          "Password reset email sent successfully",
          result,
        ),
      );
  },
);

export const resetPassword = asyncHandler(
  async (req: Request, res: Response) => {
    const { resetToken: token, password: newPassword } = validateResetPassword(
      req.body,
    );

    const result = await AuthService.resetPassword(token, newPassword);

    res
      .status(HttpStatus.OK)
      .json(
        new ApiResponse(HttpStatus.OK, "Password reset successful", result),
      );
  },
);

export const refreshAccessToken = asyncHandler(
  async (req: Request, res: Response) => {
    const refreshToken = req.cookies?.refreshToken || req.body.refreshToken;

    if (!refreshToken) {
      throw new ApiError(HttpStatus.UNAUTHORIZED, "Refresh token not found");
    }

    const result = await AuthService.refreshAccessToken(refreshToken);

    res
      .status(HttpStatus.OK)
      .json(
        new ApiResponse(HttpStatus.OK, "Token refreshed successfully", result),
      );
  },
);

export const checkUsernameUnique = asyncHandler(
  async (req: Request, res: Response) => {
    const { username } = req.query;
    if (!username) {
      throw new ApiError(HttpStatus.BAD_REQUEST, "Username is required");
    }

    const result = await AuthService.checkUsernameUnique(username as string);

    res
      .status(HttpStatus.OK)
      .json(
        new ApiResponse(HttpStatus.OK, "Username uniqueness checked", result),
      );
  },
);
