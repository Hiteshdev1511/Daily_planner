import { UUID } from "../common/UUID.types.js"

export interface User {
    id: UUID
    username: string
    email: string
    person: UUID
    ownedProjects: UUID[]
    collaborations: UUID[]
}