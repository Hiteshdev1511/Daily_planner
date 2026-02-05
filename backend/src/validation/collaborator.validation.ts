import { z } from "zod";

export const CollaboratorDbSchema = z.object({
    userId: z.string().uuid("Invalid user id"),
    email: z.email("Invalid email"),
    role: z.enum(["OWNER", "ADMIN", "EDITOR", "VIEWER"])
})

export const AddCollaboratorSchema = z.object({
  email: z.email("Invalid email"),
  role: z.enum(["ADMIN", "EDITOR", "VIEWER"]),
});

export const UpdateRoleSchema = z.object({
  role: z.enum(["ADMIN", "EDITOR", "VIEWER", "OWNER"]),
});

export function validateAddCollaborator(data: unknown) {
  return AddCollaboratorSchema.parse(data);
}

export function validateUpdateRole(data: unknown) {
  return UpdateRoleSchema.parse(data);
}
