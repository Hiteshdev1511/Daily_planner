import { Request, Response } from "express";
import { ProjectService } from "../services/project.service";
import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError";
import { HttpStatus } from "../types/api";
import asyncHandler from "../utils/asyncHandler";
import {
  validateCreateProject,
  validateUpdateProject,
} from "../validation/project.validation";

/**
 * Create project
 */
export const createProject = asyncHandler(
  async (req: Request, res: Response) => {
    if (!req.user) {
      throw new ApiError(HttpStatus.UNAUTHORIZED, "User not authenticated");
    }

    const validatedData = validateCreateProject(req.body);

    const result = await ProjectService.createProject(
      req.user.id,
      validatedData,
    );

    res
      .status(HttpStatus.CREATED)
      .json(
        new ApiResponse(
          HttpStatus.CREATED,
          "Project created successfully",
          result,
        ),
      );
  },
);

/**
 * Get user's projects
 */
export const getUserProjects = asyncHandler(
  async (req: Request, res: Response) => {
    if (!req.user) {
      throw new ApiError(HttpStatus.UNAUTHORIZED, "User not authenticated");
    }

    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const result = await ProjectService.getUserProjects(
      req.user.id,
      page,
      limit,
    );

    res
      .status(HttpStatus.OK)
      .json(
        new ApiResponse(
          HttpStatus.OK,
          "Projects retrieved successfully",
          result,
        ),
      );
  },
);

/**
 * Get project by ID
 */
export const getProjectById = asyncHandler(
  async (req: Request, res: Response) => {
    const projectId =
      typeof req.params.projectId === "string"
        ? req.params.projectId
        : req.params.projectId[0];

    const result = await ProjectService.getProjectById(projectId);

    res
      .status(HttpStatus.OK)
      .json(
        new ApiResponse(
          HttpStatus.OK,
          "Project retrieved successfully",
          result,
        ),
      );
  },
);

/**
 * Update project
 */
export const updateProject = asyncHandler(
  async (req: Request, res: Response) => {
    if (!req.user) {
      throw new ApiError(HttpStatus.UNAUTHORIZED, "User not authenticated");
    }

    const projectId =
      typeof req.params.projectId === "string"
        ? req.params.projectId
        : req.params.projectId[0];
    const validatedData = validateUpdateProject(req.body);

    const result = await ProjectService.updateProject(
      projectId,
      req.user.id,
      validatedData,
    );

    res
      .status(HttpStatus.OK)
      .json(
        new ApiResponse(HttpStatus.OK, "Project updated successfully", result),
      );
  },
);

/**
 * Delete project
 */
export const deleteProject = asyncHandler(
  async (req: Request, res: Response) => {
    if (!req.user) {
      throw new ApiError(HttpStatus.UNAUTHORIZED, "User not authenticated");
    }

    const projectId =
      typeof req.params.projectId === "string"
        ? req.params.projectId
        : req.params.projectId[0];

    const result = await ProjectService.deleteProject(projectId, req.user.id);

    res
      .status(HttpStatus.OK)
      .json(
        new ApiResponse(HttpStatus.OK, "Project deleted successfully", result),
      );
  },
);
