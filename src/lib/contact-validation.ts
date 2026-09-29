import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  mobile: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number."),
  message: z.string().trim().min(5, "Enter your message."),
});

export type ContactInput = z.infer<typeof contactSchema>;