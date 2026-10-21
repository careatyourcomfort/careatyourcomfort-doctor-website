import { z } from "zod";

const noLinks = (v: string) => !/(https?:\/\/|www\.)/i.test(v);

export const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your name.")
    .max(60, "Name is too long.")
    .refine(noLinks, "Please remove links from this field."),
  mobile: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number.")
    .refine((v) => !/^(\d)\1{9}$/.test(v), "Enter a valid mobile number."),
  address: z
    .string()
    .trim()
    .min(15, "Enter your full address.")
    .max(300, "Address is too long.")
    .refine(noLinks, "Please remove links from this field."),
  service: z.enum(["Physician", "General Surgery", "General Medicine"], {
    error: "Choose a service.",
  }),
  reason: z
    .string()
    .trim()
    .min(5, "Tell us the reason for the visit.")
    .max(500, "Reason is too long.")
    .refine(noLinks, "Please remove links from this field."),
  date: z.string().min(1, "Choose a date."),
  time: z.string().min(1, "Choose a time."),
});

export type BookingInput = z.infer<typeof bookingSchema>;