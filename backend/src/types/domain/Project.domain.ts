import { UUID } from "../common/UUID.types.js";

export interface Project {
  id: UUID;
  title: string;
  owner: UUID;
  collaborators: UUID[];
  todos: UUID[];
}
