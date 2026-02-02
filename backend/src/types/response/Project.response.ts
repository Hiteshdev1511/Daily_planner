import { UUID } from "../common/UUID.types"

type ProjectResponse = {
    id: UUID
    title:string
}

export type CreateProjectResponse = ProjectResponse
export type UpdateProjectTitleRequest = ProjectResponse