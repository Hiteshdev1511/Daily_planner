import { UUID } from "../common/UUID.types";

type TodoRequest = {
  title: string;
  description: string;
  deadline: Date;
  isCompleted: boolean;
  projectId: UUID;
};

export type CreateTodoRequest = TodoRequest;
export type UpdateTodoRequest = Partial<
  Omit<TodoRequest, "deadline" | "projectId" | "isCompleted">
>;
export type ChangeDeadlineRequest = Pick<TodoRequest, "deadline">;
export type CompleteTodoRequest = Pick<TodoRequest, "isCompleted">;
