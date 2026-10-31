import { z } from "zod";
import {
  challengeOptions,
  companySizes,
  industries,
  officeLocationOptions,
  printerBrands,
  printerCounts,
  serviceOptions,
  deliveryNeeds,
} from "@/data/options";

const phone = z
  .string()
  .trim()
  .min(7, "Enter a business telephone number.")
  .max(30)
  .refine((value) => (value.match(/\d/g) ?? []).length >= 10, "Enter a telephone number with at least 10 digits.");

export const assessmentSchema = z.object({
  firstName: z.string().trim().min(1, "Enter a first name.").max(80),
  lastName: z.string().trim().min(1, "Enter a last name.").max(80),
  businessEmail: z.string().trim().email("Enter a valid business email.").max(160),
  businessPhone: phone,
  companyName: z.string().trim().min(1, "Enter a company name.").max(160),
  industry: z.enum(industries, { errorMap: () => ({ message: "Select an industry." }) }),
  companySize: z.enum(companySizes, { errorMap: () => ({ message: "Select a company size." }) }),
  officeLocations: z.enum(officeLocationOptions, { errorMap: () => ({ message: "Select the number of office locations." }) }),
  printerCount: z.enum(printerCounts, { errorMap: () => ({ message: "Select a printer count." }) }),
  printerBrands: z.array(z.enum(printerBrands)).max(12),
  requestedServices: z.array(z.enum(serviceOptions)).min(1, "Select at least one service."),
  challenges: z.array(z.enum(challengeOptions)).max(12),
  onSiteNeed: z.enum(deliveryNeeds, { errorMap: () => ({ message: "Select the on-site need." }) }),
  remoteNeed: z.enum(deliveryNeeds, { errorMap: () => ({ message: "Select the remote support need." }) }),
  additionalInformation: z.string().trim().max(2000),
  privacyConsent: z.boolean().refine((value) => value, { message: "Consent is required before we can receive this request." }),
  faxNumber: z.string().optional(),
  startedAt: z.number(),
});

export const contactSchema = z.object({
  firstName: z.string().trim().min(1, "Enter a first name.").max(80),
  lastName: z.string().trim().min(1, "Enter a last name.").max(80),
  businessEmail: z.string().trim().email("Enter a valid business email.").max(160),
  businessPhone: phone,
  companyName: z.string().trim().min(1, "Enter a company name.").max(160),
  onSiteNeed: z.enum(deliveryNeeds, { errorMap: () => ({ message: "Select the on-site need." }) }),
  remoteNeed: z.enum(deliveryNeeds, { errorMap: () => ({ message: "Select the remote support need." }) }),
  message: z.string().trim().min(10, "Add a short note about the request.").max(2000),
  privacyConsent: z.boolean().refine((value) => value, { message: "Consent is required before we can receive this message." }),
  faxNumber: z.string().optional(),
  startedAt: z.number(),
});

export type AssessmentInput = z.infer<typeof assessmentSchema>;
export type ContactInput = z.infer<typeof contactSchema>;

export function timingError(startedAt: number) {
  const elapsed = Date.now() - startedAt;
  if (!Number.isFinite(startedAt) || elapsed < 2500 || elapsed > 1000 * 60 * 60 * 12) {
    return "Submit the form from the page and wait a moment before sending.";
  }
  return null;
}
