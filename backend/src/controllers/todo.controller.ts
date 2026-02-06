import { Request, Response } from "express";
import { TodoService } from "../services/todo.service";
import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError";
import { HttpStatus } from "../types/api";
import asyncHandler from "../utils/asyncHandler";
import {
  validateCreateTodo,
  validateUpdateTodo,
  validateChangeDeadline,
} from "../validation/todo.validation";

/**
 * Create todo
 */
export const createTodo = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user) {
    throw new ApiError(HttpStatus.UNAUTHORIZED, "User not authenticated");
  }

  const projectId =
    typeof req.params.projectId === "string"
      ? req.params.projectId
      : req.params.projectId[0];
  const validatedData = validateCreateTodo(req.body);

  const result = await TodoService.createTodo(
    req.user.id,
    projectId,
    validatedData,
  );

  res
    .status(HttpStatus.CREATED)
    .json(
      new ApiResponse(HttpStatus.CREATED, "Todo created successfully", result),
    );
});

/**
 * Get project todos
 */
export const getProjectTodos = asyncHandler(
  async (req: Request, res: Response) => {
    const projectId =
      typeof req.params.projectId === "string"
        ? req.params.projectId
        : req.params.projectId[0];

    const result = await TodoService.getProjectTodos(projectId);

    res
      .status(HttpStatus.OK)
      .json(
        new ApiResponse(HttpStatus.OK, "Todos retrieved successfully", result),
      );
  },
);

/**
 * Get todo by ID
 */
export const getTodoById = asyncHandler(async (req: Request, res: Response) => {
  const todoId =
    typeof req.params.todoId === "string"
      ? req.params.todoId
      : req.params.todoId[0];

  const result = await TodoService.getTodoById(todoId);

  res
    .status(HttpStatus.OK)
    .json(
      new ApiResponse(HttpStatus.OK, "Todo retrieved successfully", result),
    );
});

/**
 * Update todo
 */
export const updateTodo = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user) {
    throw new ApiError(HttpStatus.UNAUTHORIZED, "User not authenticated");
  }

  const todoId =
    typeof req.params.todoId === "string"
      ? req.params.todoId
      : req.params.todoId[0];
  const validatedData = validateUpdateTodo(req.body);

  const result = await TodoService.updateTodo(
    todoId,
    req.user.id,
    validatedData,
  );

  res
    .status(HttpStatus.OK)
    .json(new ApiResponse(HttpStatus.OK, "Todo updated successfully", result));
});

/**
 * Complete todo
 */
export const completeTodo = asyncHandler(
  async (req: Request, res: Response) => {
    if (!req.user) {
      throw new ApiError(HttpStatus.UNAUTHORIZED, "User not authenticated");
    }

    const todoId =
      typeof req.params.todoId === "string"
        ? req.params.todoId
        : req.params.todoId[0];

    const result = await TodoService.toggleTodoComplete(todoId, req.user.id);

    res
      .status(HttpStatus.OK)
      .json(
        new ApiResponse(
          HttpStatus.OK,
          "Todo status updated successfully",
          result,
        ),
      );
  },
);

/**
 * Change deadline
 */
export const changeDeadline = asyncHandler(
  async (req: Request, res: Response) => {
    if (!req.user) {
      throw new ApiError(HttpStatus.UNAUTHORIZED, "User not authenticated");
    }

    const todoId =
      typeof req.params.todoId === "string"
        ? req.params.todoId
        : req.params.todoId[0];
    const validatedData = validateChangeDeadline(req.body);

    const result = await TodoService.changeDeadline(
      todoId,
      req.user.id,
      validatedData.deadline,
    );

    res
      .status(HttpStatus.OK)
      .json(
        new ApiResponse(HttpStatus.OK, "Deadline updated successfully", result),
      );
  },
);

/**
 * Delete todo
 */
export const deleteTodo = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user) {
    throw new ApiError(HttpStatus.UNAUTHORIZED, "User not authenticated");
  }

  const todoId =
    typeof req.params.todoId === "string"
      ? req.params.todoId
      : req.params.todoId[0];

  const result = await TodoService.deleteTodo(todoId, req.user.id);

  res
    .status(HttpStatus.OK)
    .json(new ApiResponse(HttpStatus.OK, "Todo deleted successfully", result));
});
