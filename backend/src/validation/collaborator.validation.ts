import { z } from "zod";

export const CollaboratorDbSchema = z.object({
  userId: z.string().uuid("Invalid user id"),
  email: z.email("Invalid email"),
  role: z.enum(["OWNER", "ADMIN", "EDITOR", "VIEWER"]),
});

export const AddCollaboratorSchema = CollaboratorDbSchema.pick({
  email: true,
  role: true,
});

export const UpdateRoleSchema = CollaboratorDbSchema.pick({ role: true });

export function validateAddCollaborator(data: unknown) {
  return AddCollaboratorSchema.parse(data);
}

export function validateUpdateRole(data: unknown) {
  return UpdateRoleSchema.parse(data);
}
