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
      },
    });

    if (!user) {
      throw new ApiError(HttpStatus.NOT_FOUND, "User not found");
    }

    return {
      userId: user.id,
      email: user.email,
      username: user.username,
      person: {
        id: user.person.id,
        firstname: user.person.firstname,
        lastname: user.person.lastname,
        gender: user.person.gender,
        dob: user.person.dob,
      },
    };
  }

  /**
   * Get user by ID
   */
  static async getUserById(userId: string) {
    const user = await client.user.findUnique({
      where: { id: userId },
      include: {
        ownedProjects: true,
      },
    });

    if (!user) {
      throw new ApiError(HttpStatus.NOT_FOUND, "User not found");
    }

    return {
      userId: user.id,
      email: user.email,
      username: user.username,
      ownedProjects: user.ownedProjects,
    };
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
      select: { id: true },
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

    return {
      userId: updatedUser.id,
      username: updatedUser.username,
      person: {
        firstname: updatedUser.person.firstname,
        lastname: updatedUser.person.lastname,
        dob: updatedUser.person.dob,
        gender: updatedUser.person.gender,
      },
    };
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
