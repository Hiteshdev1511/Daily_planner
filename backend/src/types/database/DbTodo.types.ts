import { UUID } from "../common/UUID.types.js";
import { DbBase } from "./DbBase.types.js";

export interface DbTodo extends DbBase {
  title: string;
  description: string;
  deadline: Date;
  isCompleted: boolean;
  projectId: UUID;
  createdBy: UUID;
}
