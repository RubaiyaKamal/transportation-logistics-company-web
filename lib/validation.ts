import { z } from "zod";

export const serviceIds = [
  "ftl",
  "ltl",
  "distribution",
  "international",
  "warehousing",
  "customs",
] as const;

const optionalText = (max: number) =>
  z.string().trim().max(max).optional().default("");

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: optionalText(120),
  email: z.email(),
  phone: optionalText(40),
  message: z.string().trim().min(10).max(4000),
  consent: z.literal(true),
});

export const quoteSchema = z.object({
  company: z.string().trim().min(2).max(120),
  name: z.string().trim().min(2).max(120),
  email: z.email(),
  phone: z.string().trim().min(6).max(40),
  service: z.enum(serviceIds),
  pickup: z.string().trim().min(2).max(200),
  delivery: z.string().trim().min(2).max(200),
  cargo: optionalText(200),
  weight: optionalText(40),
  date: optionalText(40),
  message: z.string().trim().max(4000).optional().default(""),
  consent: z.literal(true),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type QuoteInput = z.infer<typeof quoteSchema>;
