import { z } from "zod";

const ProjectDbSchema = z.object({
  title: z.string().min(1, "Project title is required").max(255, "Project title must be less than 255 characters"),
  description:z.string().optional()
  })

export const CreateProjectSchema = ProjectDbSchema

export const UpdateProjectSchema = ProjectDbSchema

export function validateCreateProject(data: unknown) {
  return CreateProjectSchema.parse(data);
}

export function validateUpdateProject(data: unknown) {
  return UpdateProjectSchema.parse(data);
}
