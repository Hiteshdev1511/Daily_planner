import { UUID } from "../common/UUID.types.js";
import { DbBase } from "./DbBase.types.js";

export interface DbUser extends DbBase {
  email: string;
  username: string;
  password: string;
  refreshToken: string;
  personId: UUID;
}
