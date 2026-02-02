import { Collaborator } from "./Collaborator.domain.js";
import { User } from "./User.domain.js";
import { Todo } from "./Todo.domain.js";
import { UUID } from "../common/UUID.types.js";

export interface Project {
  id: UUID;
  title: string;
  owner: User;
  collaborators: Collaborator[];
  todos: Todo[];
}
