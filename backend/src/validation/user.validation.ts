import { z } from "zod";

export const UpdateProfileSchema = z
  .object({
    firstname: z.string().min(1).optional(),
    lastname: z.string().optional(),
    dob: z.coerce.date().optional(),
    gender: z.string().optional(),
  })
  .strict();

export function validateUpdateProfile(data: unknown) {
  return UpdateProfileSchema.parse(data);
}
