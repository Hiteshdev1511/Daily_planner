import { Gender } from "../common/Gender.types"

type UserRequest = {
    firstname: string
    lastname: string
    dob: Date
    gender:Gender
}

export type UpdateProfileRequest = Partial<UserRequest>