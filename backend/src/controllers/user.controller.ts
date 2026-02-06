import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError";
import { HttpStatus } from "../types/api";
import asyncHandler from "../utils/asyncHandler";
import { validateUpdateProfile } from "../validation/user.validation";

/**
 * Get current user
 */
export const getCurrentUser = asyncHandler(
  async (req: Request, res: Response) => {
    if (!req.user) {
      throw new ApiError(HttpStatus.UNAUTHORIZED, "User not authenticated");
    }

    const result = await UserService.getCurrentUser(req.user.id);

    res
      .status(HttpStatus.OK)
      .json(
        new ApiResponse(HttpStatus.OK, "User retrieved successfully", result),
      );
  },
);

/**
 * Update user profile
 */
export const updateProfile = asyncHandler(
  async (req: Request, res: Response) => {
    if (!req.user) {
      throw new ApiError(HttpStatus.UNAUTHORIZED, "User not authenticated");
    }

    const validatedData = validateUpdateProfile(req.body);

    const result = await UserService.updateProfile(req.user.id, validatedData);

    res
      .status(HttpStatus.OK)
      .json(
        new ApiResponse(HttpStatus.OK, "Profile updated successfully", result),
      );
  },
);
