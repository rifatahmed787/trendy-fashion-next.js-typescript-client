import { z } from "zod";

export const LoginFormSchema = z.object({
  identifier: z
    .string()
    .min(1, { message: "Email or mobile number is required." })
    .refine(
      (value) => /^[0-9]{11}$/.test(value) || /\S+@\S+\.\S+/.test(value),
      { message: "Please provide a valid email or mobile number." }
    ),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(/[a-zA-Z]/, {
      message: "Password must contain at least one letter.",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character.",
    })
    .trim(),
});
