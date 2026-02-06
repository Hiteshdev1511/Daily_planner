import { z } from "zod";

const projectTitleSchema = z
  .string()
  .min(1, "Project title is required")
  .max(255, "Project title must be less than 255 characters");

export const CreateProjectSchema = z
  .object({
    title: projectTitleSchema,
    description: z.string().optional(),
  });

export const UpdateProjectSchema = z
  .object({
    title: projectTitleSchema.optional(),
    description: z.string().optional(),
  });

export function validateCreateProject(data: unknown) {
  return CreateProjectSchema.parse(data);
}

export function validateUpdateProject(data: unknown) {
  return UpdateProjectSchema.parse(data);
}
