import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  mobile: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number."),
  address: z.string().trim().min(10, "Enter your full address."),
  service: z.enum(["Physician", "General Surgery", "General Medicine"], {
    error: "Choose a service.",
  }),
  reason: z.string().trim().min(3, "Tell us the reason for the visit."),
  date: z.string().min(1, "Choose a date."),
  time: z.string().min(1, "Choose a time."),
});

export type BookingInput = z.infer<typeof bookingSchema>;