import { z } from "zod";

const todoTitleSchema = z
  .string()
  .min(1, "Todo title is required")
  .max(255, "Todo title must be less than 255 characters");

export const CreateTodoSchema = z
  .object({
    title: todoTitleSchema,
    description: z.string().optional(),
    deadline: z.coerce.date().optional(),
  });

export const UpdateTodoSchema = z
  .object({
    title: todoTitleSchema.optional(),
    description: z.string().optional(),
    isCompleted: z.boolean().optional(),
  });

export const ChangeDeadlineSchema = z
  .object({
    deadline: z.coerce.date(),
  });

export function validateCreateTodo(data: unknown) {
  return CreateTodoSchema.parse(data);
}

export function validateUpdateTodo(data: unknown) {
  return UpdateTodoSchema.parse(data);
}

export function validateChangeDeadline(data: unknown) {
  return ChangeDeadlineSchema.parse(data);
}
