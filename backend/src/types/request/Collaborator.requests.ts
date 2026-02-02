import { AuthRole } from "../common/AuthRoles.types.js";
import { UUID } from "../common/UUID.types.js";

type CollaboratorRequest = {
  userId: UUID;
  email?: string;
  role: AuthRole;
};

export type InviteCollaboratorRequest = CollaboratorRequest;
export type ChangeRoleRequest = Omit<CollaboratorRequest, "email">;
export type RemoveCollaboratorRequest = Omit<CollaboratorRequest, "email" | "role">;
