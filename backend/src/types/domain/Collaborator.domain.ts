import { AuthRole } from "../common/AuthRoles.types.js"
import { UUID } from "../common/UUID.types.js"
    
export interface Collaborator {
    role: AuthRole
    userId: UUID
    projectId: UUID
}