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
      include: {
        project: true,
        creator: true,
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
      include: {
        project: true,
        creator: true,
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
  static async getProjectTodos(projectId: string) {
    // Check if project exists
    await ProjectService.getProjectById(projectId);

    const todos = await client.todo.findMany({
      where: { projectId },
      include: {
        project: true,
        creator: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return todos;
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
      todo.projectId,
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
      include: {
        project: true,
        creator: true,
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
      todo.projectId,
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
      include: {
        project: true,
        creator: true,
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
      todo.projectId,
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
      include: {
        project: true,
        creator: true,
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
      todo.projectId,
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
