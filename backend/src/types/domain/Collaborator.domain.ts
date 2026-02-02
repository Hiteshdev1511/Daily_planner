import { Project } from "./Project.domain.js"
import { User } from "./User.domain.js"
import { AuthRole } from "../common/AuthRoles.types.js"
    
export interface Collaborator {
    role: AuthRole
    userId: User
    projectId: Project
}