import { UUID } from "../common/UUID.types.js";
import { DbBase } from "./DbBase.types.js";

export interface DbProject extends DbBase {
  title: string;
  ownerId: UUID;
}
