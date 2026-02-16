import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, "Password must be atleast 8 character long")
  .max(100, "Password must be less than 100 character long")
  .regex(
    /[a-zA-Z0-9!"#$%&'()*+,\-./:;<=>?@\[\\\]^_‘{|}~]/,
    "Password must follow character constraints",
  );

export const AuthDbSchema = z.object({
  email: z.email("Invalid email format"),
  password: passwordSchema,
  username: z
    .string()
    .regex(/^[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+$/)
    .trim()
    .min(1),
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().optional(),
  dob: z.iso.date(),
  gender: z.string(),
  resetToken: z.string().nonempty(),
});

export const RegisterSchema = AuthDbSchema.omit({ resetToken: true });

export const LoginSchema = z.object({
    email: z.email("Invalid email format").optional(),
    username: z
      .string()
      .regex(/^[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+$/)
      .trim()
      .min(1)
      .optional(),
    password: passwordSchema,
  }).refine((data) => data.email || data.username, {
    message: "Either email or username is required",
    path: ["email"],
  });

export const ChangePasswordSchema = z.object({
  currentPassword: passwordSchema,
  newPassword: passwordSchema,
});

export const ForgotPasswordSchema = AuthDbSchema.pick({ email: true });

export const ResetPasswordSchema = AuthDbSchema.pick({
  password: true,
  resetToken: true,
});

export function validateRegister(data: unknown) {
  return RegisterSchema.parse(data);
}

export function validateLogin(data: unknown) {
  return LoginSchema.parse(data);
}

export function validateChangePassword(data: unknown) {
  return ChangePasswordSchema.parse(data);
}

export function validateForgotPassword(data: unknown) {
  return ForgotPasswordSchema.parse(data);
}

export function validateResetPassword(data: unknown) {
  return ResetPasswordSchema.parse(data);
}
