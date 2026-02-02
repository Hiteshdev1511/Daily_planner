import { Person } from "./Person.domain.js"
import { Project } from "./Project.domain.js"
import {Collaborator} from "./Collaborator.domain.js"
import { UUID } from "../common/UUID.types.js"

export interface User {
    id: UUID
    username: string
    email: string
    person: Person
    ownedProjects: Project[]
    collaborations: Collaborator[]
}