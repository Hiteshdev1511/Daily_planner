import { client } from "../lib/prisma";
import { ApiError } from "../utils/ApiError";
import { HttpStatus } from "../types/api";
import { Permission } from "../types/auth";

export class ProjectService {
  /**
   * Create a new project
   */
  static async createProject(
    userId: string,
    data: { title: string; description?: string },
  ) {
    if (!data.title || data.title.trim().length === 0) {
      throw new ApiError(HttpStatus.BAD_REQUEST, "Project title is required");
    }

    const project = await client.project.create({
      data: {
        title: data.title,
        ownerId: userId,
      },
      include: {
        owner: true,
        todos: true,
        collaborators: true,
      },
    });

    return project;
  }

  /**
   * Get project by ID
   */
  static async getProjectById(projectId: string) {
    const project = await client.project.findUnique({
      where: { id: projectId },
      include: {
        owner: true,
        todos: true,
        collaborators: {
          include: {
            user: true,
          },
        },
      },
    });

    if (!project) {
      throw new ApiError(HttpStatus.NOT_FOUND, "Project not found");
    }

    return project;
  }

  /**
   * Get all projects for a user
   */
  static async getUserProjects(userId: string) {
    const projects = await client.project.findMany({
      where: {
        OR: [
          { ownerId: userId },
          {
            collaborators: {
              some: {
                userId: userId,
              },
            },
          },
        ],
      },
      include: {
        owner: true,
        todos: true,
        collaborators: true,
      },
    });

    return projects;
  }

  /**
   * Update project
   */
  static async updateProject(
    projectId: string,
    userId: string,
    data: { title?: string; description?: string },
  ) {
    const project = await this.getProjectById(projectId);

    // Check if user is the owner
    if (project.ownerId !== userId) {
      throw new ApiError(HttpStatus.FORBIDDEN, "Only project owner can update");
    }

    const updatedProject = await client.project.update({
      where: { id: projectId },
      data: {
        title: data.title || project.title,
        updatedAt: new Date(),
      },
      include: {
        owner: true,
        todos: true,
        collaborators: true,
      },
    });

    return updatedProject;
  }

  /**
   * Delete project
   */
  static async deleteProject(projectId: string, userId: string) {
    const project = await this.getProjectById(projectId);

    // Check if user is the owner
    if (project.ownerId !== userId) {
      throw new ApiError(HttpStatus.FORBIDDEN, "Only project owner can delete");
    }

    await client.project.delete({
      where: { id: projectId },
    });

    return { message: "Project deleted successfully" };
  }

  /**
   * Check if user has permission in project
   */
  static async getUserPermissions(
    projectId: string,
    userId: string,
  ): Promise<Permission[]> {
    const project = await this.getProjectById(projectId);

    // Owner has all permissions
    if (project.ownerId === userId) {
      return Object.values(Permission);
    }

    // Get collaborator role
    const collaborator = await client.collaborator.findFirst({
      where: {
        projectId,
        userId,
      },
    });

    if (!collaborator) {
      return [];
    }

    // Map roles to permissions
    const rolePermissions: Record<string, Permission[]> = {
      OWNER: Object.values(Permission),
      EDITOR: [
        Permission.CREATE_TODO,
        Permission.UPDATE_TODO,
        Permission.DELETE_TODO,
        Permission.COMPLETE_TODO,
      ],
      VIEWER: [],
      ADMIN: Object.values(Permission),
    };

    return rolePermissions[collaborator.role] || [];
  }

  /**
   * Check if user has specific permission
   */
  static async hasPermission(
    projectId: string,
    userId: string,
    permission: Permission,
  ): Promise<boolean> {
    const permissions = await this.getUserPermissions(projectId, userId);
    return permissions.includes(permission);
  }
}
