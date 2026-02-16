import { UUID } from "../common/UUID.types.js";

export interface Todo {
  id: UUID;
  title: string;
  description: string;
  deadline: Date;
  isCompleted: boolean;
  creator: UUID;
  project: UUID;
}
