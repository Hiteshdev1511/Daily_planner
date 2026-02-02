import { UUID } from "../common/UUID.types.js";
import { AuthRole } from "../common/AuthRoles.types.js";

export interface AuthenticatedUser {
  id: UUID;
  email: string;
  username: string;
  role?: AuthRole;
}
