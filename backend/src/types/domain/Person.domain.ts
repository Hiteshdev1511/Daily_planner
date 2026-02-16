import { UUID } from "../common";

export interface Person {
  id: UUID;
  firstname: string;
  lastname: string;
  dob: Date;
  gender: string;
}
