import { Gender } from "../common/Gender.types.js";
import { DbBase } from "./DbBase.types.js";

export interface DbPerson extends DbBase{
    firstname: string
    lastname?: string
    dob: Date
    gender: Gender
}