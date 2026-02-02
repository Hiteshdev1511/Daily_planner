import { AuthRole } from "../common/AuthRoles.types";
import { UUID } from "../common/UUID.types";

type CollaboratorResponse = {
    userId: UUID
    role: AuthRole
    email?:string
}

export type InviteCollaboratorResponse = CollaboratorResponse
export type ChangeRoleResponse = Omit<CollaboratorResponse,"email">
export type RemoveCollaboratorResponse = Pick<CollaboratorResponse,"userId">