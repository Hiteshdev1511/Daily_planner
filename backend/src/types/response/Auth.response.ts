import { UUID } from "../common/UUID.types";

type UserAuthResponse = {
  id: UUID;
  email: string;
  username: string;
};

type AuthResponse = {
  user: UserAuthResponse;
  refreshToken: string;
  accessToken: string;
};

export type RegisterResponse = Pick<AuthResponse, "user" | "accessToken">;
export type LoginResponse = Omit<AuthResponse, "refreshToken">;
export type LogoutResponse = Pick<UserAuthResponse, "id">;
export type ChangePasswordResponse = Omit<UserAuthResponse, "email">;
export type RefreshTokenResponse = Pick<AuthResponse, "accessToken">;