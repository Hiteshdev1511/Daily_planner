import { Gender } from "../database/DbPerson.types.js"

export interface Person{
    firstname: string
    lastname: string
    dob: Date
    gender:Gender
}