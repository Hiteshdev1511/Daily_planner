import { UUID } from "../common/UUID.types.js";
import { Project } from "./Project.domain.js";
import { User } from "./User.domain.js";

export interface Todo {
  id: UUID;
  title: string;
  description: string;
  deadline: Date;
  isCompleted: boolean;
  creator: User;
  project: Project;
}
