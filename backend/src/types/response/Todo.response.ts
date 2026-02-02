import { UUID } from "../common/UUID.types"

type TodoResponse = {
    id: UUID
    title: string
    description: string
    isCompleted: string
    deadline:Date
    projectId:UUID
}

export type createTodoResponse = TodoResponse
export type UpdateTodoResponse = Partial<Omit<TodoResponse, "id">> & { id: UUID }
export type ChangeDeadlineResponse = Pick<TodoResponse, "id" | "deadline">
export type CompleteTodoResponse = Pick<TodoResponse,"id">