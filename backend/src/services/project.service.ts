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
      select: {
        id: true,
        title: true,

        owner: { select: { id: true, username: true } },
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
      select: {
        id: true,
        title: true,
        ownerId: true,
        todos: {
          select: {
            id: true,
            title: true,
            description: true,
            deadline: true,
            isCompleted: true,
          },
        },
        collaborators: { select: { role: true, userId: true } },
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
  static async getUserProjects(
    userId: string,
    page: number = 1,
    limit: number = 20,
  ) {
    // Validate pagination parameters
    const pageNum = Math.max(1, page);
    const limitNum = Math.min(limit, 100); // Max 100 items per page
    const skip = (pageNum - 1) * limitNum;

    // Get projects with pagination
    const [projects, total] = await Promise.all([
      client.project.findMany({
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
        select: {
          id: true,
          title: true,
          owner: {
            select: {
              id: true,
              email: true,
              username: true,
            },
          },
          _count: {
            select: { todos: true, collaborators: true },
          },
        },
        orderBy: { updatedAt: "desc" },
        skip,
        take: limitNum,
      }),
      // Get total count
      client.project.count({
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
      }),
    ]);

    return {
      data: projects,
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
      select: {
        id: true,
        title: true,
        updatedAt: true,
        ownerId:true
      }
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
      select: {
        role: true,
        userId: true,
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
