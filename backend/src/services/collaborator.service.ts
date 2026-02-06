import { client } from "../lib/prisma";
import { ApiError } from "../utils/ApiError";
import { HttpStatus } from "../types/api";
import { ProjectService } from "./project.service";
import { Permission } from "../types/auth";

export class CollaboratorService {
  /**
   * Add collaborator to project
   */
  static async addCollaborator(
    projectId: string,
    userId: string,
    data: { email: string; role: "ADMIN" | "EDITOR" | "VIEWER" | "OWNER" },
  ) {
    // Check if project exists
    const project = await ProjectService.getProjectById(projectId);

    // Check if user is project owner or admin
    const hasPermission = await ProjectService.hasPermission(
      projectId,
      userId,
      Permission.INVITE_COLLABORATOR,
    );

    if (!hasPermission) {
      throw new ApiError(
        HttpStatus.FORBIDDEN,
        "You don't have permission to add collaborators",
      );
    }

    // Find user by email
    const collaboratorUser = await client.user.findUnique({
      where: { email: data.email },
    });

    if (!collaboratorUser) {
      throw new ApiError(HttpStatus.NOT_FOUND, "User not found");
    }

    if (collaboratorUser.id === project.ownerId) {
      throw new ApiError(
        HttpStatus.CONFLICT,
        "User is already the project owner",
      );
    }

    // Check if already a collaborator
    const existingCollaborator = await client.collaborator.findFirst({
      where: {
        projectId,
        userId: collaboratorUser.id,
      },
    });

    if (existingCollaborator) {
      throw new ApiError(HttpStatus.CONFLICT, "User is already a collaborator");
    }

    // Add collaborator
    const collaborator = await client.collaborator.create({
      data: {
        projectId,
        userId: collaboratorUser.id,
        role: data.role,
      },
      include: {
        user: true,
        project: true,
      },
    });

    return collaborator;
  }

  /**
   * Get collaborators for a project
   */
  static async getProjectCollaborators(projectId: string) {
    // Check if project exists
    await ProjectService.getProjectById(projectId);

    const collaborators = await client.collaborator.findMany({
      where: { projectId },
      include: {
        user: true,
      },
    });

    return collaborators;
  }

  /**
   * Update collaborator role
   */
  static async updateCollaboratorRole(
    projectId: string,
    userId: string,
    collaboratorId: string,
    newRole: "ADMIN" | "EDITOR" | "VIEWER" | "OWNER",
  ) {
    // Check if project exists
    await ProjectService.getProjectById(projectId);

    // Check if user has permission to change roles
    const hasPermission = await ProjectService.hasPermission(
      projectId,
      userId,
      Permission.CHANGE_ROLE,
    );

    if (!hasPermission) {
      throw new ApiError(
        HttpStatus.FORBIDDEN,
        "You don't have permission to change roles",
      );
    }

    const collaborator = await client.collaborator.findUnique({
      where: { id: collaboratorId },
    });

    if (!collaborator || collaborator.projectId !== projectId) {
      throw new ApiError(HttpStatus.NOT_FOUND, "Collaborator not found");
    }

    const updatedCollaborator = await client.collaborator.update({
      where: { id: collaboratorId },
      data: {
        role: newRole,
        updatedAt: new Date(),
      },
      include: {
        user: true,
      },
    });

    return updatedCollaborator;
  }

  /**
   * Remove collaborator from project
   */
  static async removeCollaborator(
    projectId: string,
    userId: string,
    collaboratorId: string,
  ) {
    // Check if project exists
    await ProjectService.getProjectById(projectId);

    // Check if user has permission to remove collaborators
    const hasPermission = await ProjectService.hasPermission(
      projectId,
      userId,
      Permission.REMOVE_COLLABORATOR,
    );

    if (!hasPermission) {
      throw new ApiError(
        HttpStatus.FORBIDDEN,
        "You don't have permission to remove collaborators",
      );
    }

    const collaborator = await client.collaborator.findUnique({
      where: { id: collaboratorId },
    });

    if (!collaborator || collaborator.projectId !== projectId) {
      throw new ApiError(HttpStatus.NOT_FOUND, "Collaborator not found");
    }

    await client.collaborator.delete({
      where: { id: collaboratorId },
    });

    return { message: "Collaborator removed successfully" };
  }

  /**
   * Get user's collaboration on a project
   */
  static async getUserCollaborationRole(
    projectId: string,
    userId: string,
  ): Promise<string | null> {
    const collaborator = await client.collaborator.findFirst({
      where: {
        projectId,
        userId,
      },
    });

    return collaborator?.role || null;
  }
}
