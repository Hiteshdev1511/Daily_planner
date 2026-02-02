import { JwtPayload } from "jsonwebtoken";
import { UUID } from "../common/UUID.types.js";

export interface JWTPayload extends JwtPayload {
  userId: UUID;
  username?: string;
}