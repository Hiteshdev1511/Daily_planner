import { z } from "zod";

const TodoDbSchema = z.object({
  title: z
    .string()
    .min(1, "Todo title is required")
    .max(255, "Todo title must be less than 255 characters"),
  description: z.string().optional(),
  deadline: z.iso.date().optional(),
  isCompleted: z.boolean().optional(),
});

export const CreateTodoSchema = TodoDbSchema.omit({ isCompleted: true });

export const UpdateTodoSchema = TodoDbSchema.omit({ deadline: true });

export const ChangeDeadlineSchema = TodoDbSchema.pick({ deadline: true });

export function validateCreateTodo(data: unknown) {
  return CreateTodoSchema.parse(data);
}

export function validateUpdateTodo(data: unknown) {
  return UpdateTodoSchema.parse(data);
}

export function validateChangeDeadline(data: unknown) {
  return ChangeDeadlineSchema.parse(data);
}
