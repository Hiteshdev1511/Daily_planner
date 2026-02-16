import { client } from "../lib/prisma";
import { ApiError } from "../utils/ApiError";
import { HttpStatus } from "../types/api";
import { ProjectService } from "./project.service";
import { Permission } from "../types/auth";

export class TodoService {
  /**
   * Create a new todo
   */
  static async createTodo(
    userId: string,
    projectId: string,
    data: { title: string; description?: string; deadline?: Date },
  ) {
    // Check if project exists
    await ProjectService.getProjectById(projectId);

    // Check if user has permission
    const hasPermission = await ProjectService.hasPermission(
      projectId,
      userId,
      Permission.CREATE_TODO,
    );

    if (!hasPermission) {
      throw new ApiError(
        HttpStatus.FORBIDDEN,
        "You don't have permission to create todos in this project",
      );
    }

    if (!data.title || data.title.trim().length === 0) {
      throw new ApiError(HttpStatus.BAD_REQUEST, "Todo title is required");
    }

    const todo = await client.todo.create({
      data: {
        title: data.title,
        description: data.description || "",
        deadline: data.deadline as Date,
        projectId,
        createdBy: userId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        deadline: true,
        isCompleted: true,
        project: { select: { id: true, title: true, ownerId: true } },
        creator: { select: { id: true, username: true } },
      },
    });

    return todo;
  }

  /**
   * Get todo by ID
   */
  static async getTodoById(todoId: string) {
    const todo = await client.todo.findUnique({
      where: { id: todoId },
      select: {
        id: true,
        title: true,
        description: true,
        deadline: true,
        isCompleted: true,
        project: { select: { id: true, title: true, ownerId: true } },
        creator: { select: { id: true, username: true } },
      },
    });

    if (!todo) {
      throw new ApiError(HttpStatus.NOT_FOUND, "Todo not found");
    }

    return todo;
  }

  /**
   * Get all todos for a project
   */
  static async getProjectTodos(
    projectId: string,
    page: number = 1,
    limit: number = 20,
  ) {
    // Validate pagination parameters
    const pageNum = Math.max(1, page);
    const limitNum = Math.min(limit, 100); // Max 100 items per page
    const skip = (pageNum - 1) * limitNum;

    // Get todos with pagination
    const [todos, total] = await Promise.all([
      client.todo.findMany({
        where: { projectId },
        select: {
          id: true,
          title: true,
          description: true,
          deadline: true,
          isCompleted: true,
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: limitNum,
      }),
      // Get total count for pagination
      client.todo.count({
        where: { projectId },
      }),
    ]);

    return {
      data: todos,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum),
        hasNextPage: pageNum < Math.ceil(total / limitNum),
        hasPrevPage: pageNum > 1,
      },
    };
  }

  /**
   * Get all todos of the user
   */
  static async getUserTodos(
    userId: string,
    page: number = 1,
    limit: number = 20,
  ) {
    const pageNum = Math.max(1, page);
    const limitNum = Math.min(limit, 100); // Max 100 items per page
    const skip = (pageNum - 1) * limitNum;

    const [todos, total] = await Promise.all([
      client.todo.findMany({
        where: { createdBy: userId },
        select: {
          id: true,
          title: true,
          description: true,
          isCompleted: true,
          deadline: true,
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: limitNum,
      }),
      client.todo.count({ where: { createdBy: userId } }),
    ]);

    return {
      data: todos,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum),
        hasNextPage: pageNum < Math.ceil(total / limitNum),
        hasPrevPage: pageNum > 1,
      },
    };
  }

  /**
   * Update todo
   */
  static async updateTodo(
    todoId: string,
    userId: string,
    data: { title?: string; description?: string; isCompleted?: boolean },
  ) {
    const todo = await this.getTodoById(todoId);

    // Check if user has permission
    const hasPermission = await ProjectService.hasPermission(
      todo.project.id,
      userId,
      Permission.UPDATE_TODO,
    );

    if (!hasPermission) {
      throw new ApiError(
        HttpStatus.FORBIDDEN,
        "You don't have permission to update todos",
      );
    }

    const updatedTodo = await client.todo.update({
      where: { id: todoId },
      data: {
        title: data.title || todo.title,
        description:
          data.description !== undefined ? data.description : todo.description,
        isCompleted:
          data.isCompleted !== undefined ? data.isCompleted : todo.isCompleted,
        updatedAt: new Date(),
      },
      select: {
        id: true,
        title: true,
        description: true,
        deadline: true,
        isCompleted: true,
        project: { select: { id: true, title: true, ownerId: true } },
        creator: { select: { id: true, username: true } },
      },
    });

    return updatedTodo;
  }

  /**
   * Complete/uncomplete todo
   */
  static async toggleTodoComplete(todoId: string, userId: string) {
    const todo = await this.getTodoById(todoId);

    // Check if user has permission
    const hasPermission = await ProjectService.hasPermission(
      todo.project.id,
      userId,
      Permission.COMPLETE_TODO,
    );

    if (!hasPermission) {
      throw new ApiError(
        HttpStatus.FORBIDDEN,
        "You don't have permission to complete todos",
      );
    }

    const updatedTodo = await client.todo.update({
      where: { id: todoId },
      data: {
        isCompleted: !todo.isCompleted,
        updatedAt: new Date(),
      },
      select: {
        id: true,
        title: true,
        description: true,
        deadline: true,
        isCompleted: true,
        project: { select: { id: true, title: true, ownerId: true } },
        creator: { select: { id: true, username: true } },
      },
    });

    return updatedTodo;
  }

  /**
   * Change todo deadline
   */
  static async changeDeadline(todoId: string, userId: string, deadline: Date) {
    const todo = await this.getTodoById(todoId);

    // Check if user has permission
    const hasPermission = await ProjectService.hasPermission(
      todo.project.id,
      userId,
      Permission.UPDATE_TODO,
    );

    if (!hasPermission) {
      throw new ApiError(
        HttpStatus.FORBIDDEN,
        "You don't have permission to update todos",
      );
    }

    const updatedTodo = await client.todo.update({
      where: { id: todoId },
      data: {
        deadline: new Date(deadline),
        updatedAt: new Date(),
      },
      select: {
        id: true,
        title: true,
        description: true,
        deadline: true,
        isCompleted: true,
        project: { select: { id: true, title: true, ownerId: true } },
        creator: { select: { id: true, username: true } },
      },
    });

    return updatedTodo;
  }

  /**
   * Delete todo
   */
  static async deleteTodo(todoId: string, userId: string) {
    const todo = await this.getTodoById(todoId);

    // Check if user has permission
    const hasPermission = await ProjectService.hasPermission(
      todo.project.id,
      userId,
      Permission.DELETE_TODO,
    );

    if (!hasPermission) {
      throw new ApiError(
        HttpStatus.FORBIDDEN,
        "You don't have permission to delete todos",
      );
    }

    await client.todo.delete({
      where: { id: todoId },
    });

    return { message: "Todo deleted successfully" };
  }
}
