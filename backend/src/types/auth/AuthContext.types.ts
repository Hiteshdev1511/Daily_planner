import { UUID } from "../common/UUID.types.js";
import { AuthenticatedUser } from "./AuthenticatedUser.types.js";
import { Permission } from "./Permission.types.js";

export interface AuthContext {
  user: AuthenticatedUser;
  permissions: Permission[];
  projectId?: UUID;
}
