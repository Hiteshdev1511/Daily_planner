type AuthRequest = {
  email: string;
  username: string;
  password: string;
  currentPassword: string;
  newPassword: string;
  resetToken: string;
}

export type RegisterRequest = Pick<AuthRequest, "email" | "username" | "password">;
export type LoginRequest = { password: string } & { email: string } | { username:string};
export type ChangePasswordRequest = Pick<AuthRequest, "currentPassword" | "newPassword">;
export type ForgotPasswordRequest = Pick<AuthRequest,"email">
export type ResetPasswordRequest = Pick<AuthRequest, "resetToken">;
export type RefreshTokenRequest = Pick<AuthRequest, "username" | "email">;