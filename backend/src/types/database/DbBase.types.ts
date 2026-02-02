import { UUID } from "../common/UUID.types"

export interface DbBase {
    id: UUID
    createdAt: Date
    updatedAt:Date
}