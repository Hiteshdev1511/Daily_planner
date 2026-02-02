import { Gender } from "../common/Gender.types"
import { UUID } from "../common/UUID.types"

type UserResponse = {
    id:UUID
    firstname: string
    lastname: string
    dob: Date
    gender:Gender
}

export type UpdateProfile = UserResponse