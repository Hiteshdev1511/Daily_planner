import { AuthRole } from "../common/AuthRoles.types.js";
import { UUID } from "../common/UUID.types.js";
import { DbBase } from "./DbBase.types.js";


export interface DbCollaborator extends DbBase{
    role: AuthRole
    userId: UUID
    projectId:UUID
}
