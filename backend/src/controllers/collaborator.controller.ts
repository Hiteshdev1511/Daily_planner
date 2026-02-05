import { Request, Response } from "express";
import { CollaboratorService } from "../services/collaborator.service";
import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError";
import { HttpStatus } from "../types/api";
import asyncHandler from "../utils/asyncHandler";
import {
  validateAddCollaborator,
  validateUpdateRole,
} from "../validation/collaborator.validation";

/**
 * Add collaborator to project
 */
export const addCollaborator = asyncHandler(
  async (req: Request, res: Response) => {
    if (!req.user) {
      throw new ApiError(HttpStatus.UNAUTHORIZED, "User not authenticated");
    }

    const projectId =
      typeof req.params.projectId === "string"
        ? req.params.projectId
        : req.params.projectId[0];
    const validatedData = validateAddCollaborator(req.body);

    const result = await CollaboratorService.addCollaborator(
      projectId,
      req.user.id,
      validatedData,
    );

    res
      .status(HttpStatus.CREATED)
      .json(
        new ApiResponse(
          HttpStatus.CREATED,
          "Collaborator added successfully",
          result,
        ),
      );
  },
);

/**
 * Get project collaborators
 */
export const getProjectCollaborators = asyncHandler(
  async (req: Request, res: Response) => {
    const projectId =
      typeof req.params.projectId === "string"
        ? req.params.projectId
        : req.params.projectId[0];

    const result = await CollaboratorService.getProjectCollaborators(projectId);

    res
      .status(HttpStatus.OK)
      .json(
        new ApiResponse(
          HttpStatus.OK,
          "Collaborators retrieved successfully",
          result,
        ),
      );
  },
);

/**
 * Update collaborator role
 */
export const updateCollaboratorRole = asyncHandler(
  async (req: Request, res: Response) => {
    if (!req.user) {
      throw new ApiError(HttpStatus.UNAUTHORIZED, "User not authenticated");
    }

    const projectId =
      typeof req.params.projectId === "string"
        ? req.params.projectId
        : req.params.projectId[0];
    const collaboratorId =
      typeof req.params.collaboratorId === "string"
        ? req.params.collaboratorId
        : req.params.collaboratorId[0];
    const validatedData = validateUpdateRole(req.body);

    const result = await CollaboratorService.updateCollaboratorRole(
      projectId,
      req.user.id,
      collaboratorId,
      validatedData.role,
    );

    res
      .status(HttpStatus.OK)
      .json(
        new ApiResponse(
          HttpStatus.OK,
          "Collaborator role updated successfully",
          result,
        ),
      );
  },
);

/**
 * Remove collaborator
 */
export const removeCollaborator = asyncHandler(
  async (req: Request, res: Response) => {
    if (!req.user) {
      throw new ApiError(HttpStatus.UNAUTHORIZED, "User not authenticated");
    }

    const projectId =
      typeof req.params.projectId === "string"
        ? req.params.projectId
        : req.params.projectId[0];
    const collaboratorId =
      typeof req.params.collaboratorId === "string"
        ? req.params.collaboratorId
        : req.params.collaboratorId[0];

    const result = await CollaboratorService.removeCollaborator(
      projectId,
      req.user.id,
      collaboratorId,
    );

    res
      .status(HttpStatus.OK)
      .json(
        new ApiResponse(
          HttpStatus.OK,
          "Collaborator removed successfully",
          result,
        ),
      );
  },
);
