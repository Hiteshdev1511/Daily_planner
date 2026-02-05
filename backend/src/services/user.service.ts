import { client } from "../lib/prisma";
import { ApiError } from "../utils/ApiError";
import { HttpStatus } from "../types/api";

export class UserService {
  /**
   * Get current user
   */
  static async getCurrentUser(userId: string) {
    const user = await client.user.findUnique({
      where: { id: userId },
      include: {
        person: true,
        ownedProjects: true,
        collaborations: true,
      },
    });

    if (!user) {
      throw new ApiError(HttpStatus.NOT_FOUND, "User not found");
    }

    return {
      id: user.id,
      email: user.email,
      username: user.username,
      person: user.person,
      ownedProjects: user.ownedProjects,
      collaborations: user.collaborations,
    };
  }

  /**
   * Get user by ID
   */
  static async getUserById(userId: string) {
    const user = await client.user.findUnique({
      where: { id: userId },
      include: {
        person: true,
        ownedProjects: true,
      },
    });

    if (!user) {
      throw new ApiError(HttpStatus.NOT_FOUND, "User not found");
    }

    return user;
  }

  /**
   * Update user profile
   */
  static async updateProfile(
    userId: string,
    data: {
      firstname?: string;
      lastname?: string;
      dob?: Date;
      gender?: string;
    },
  ) {
    const user = await client.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new ApiError(HttpStatus.NOT_FOUND, "User not found");
    }

    // Update person info
    const updatedUser = await client.user.update({
      where: { id: userId },
      data: {
        person: {
          update: {
            firstname: data.firstname,
            lastname: data.lastname,
            dob: data.dob ? new Date(data.dob) : undefined,
            gender: data.gender,
            updatedAt: new Date(),
          },
        },
        updatedAt: new Date(),
      },
      include: {
        person: true,
      },
    });

    return updatedUser;
  }

  /**
   * Delete user account
   */
  static async deleteAccount(userId: string) {
    const user = await client.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new ApiError(HttpStatus.NOT_FOUND, "User not found");
    }

    // Delete all user data
    await client.user.delete({
      where: { id: userId },
    });

    return { message: "Account deleted successfully" };
  }
}
