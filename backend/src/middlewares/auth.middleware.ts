import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth.service";
import { ApiError } from "../utils/ApiError";
import { HttpStatus } from "../types/api";

// Extend Express Request to include user
declare global {
  namespace Express {
    interface Request {
      user?: { id: string; userId: string };
    }
  }
}

/**
 * Authentication middleware to verify JWT token
 */
export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    // Get token from headers
    const token =
      req.headers.authorization?.split(" ")[1] || req.cookies?.accessToken;

    if (!token) {
      throw new ApiError(HttpStatus.UNAUTHORIZED, "Access token is required");
    }

    // Verify token
    const payload = AuthService.verifyAccessToken(token);

    // Attach user to request
    req.user = { id: payload.userId, userId: payload.userId };

    next();
  } catch (error) {
    if (error instanceof ApiError) {
      next(error);
    } else {
      next(
        new ApiError(HttpStatus.UNAUTHORIZED, "Invalid authentication token"),
      );
    }
  }
};
