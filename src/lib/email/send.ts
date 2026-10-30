import { Resend } from "resend";
import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { site } from "@/config/site";

export type LeadKind = "assessment" | "contact";

export type LeadRecord = {
  kind: LeadKind;
  reference: string;
  fields: Record<string, string | string[]>;
};

function configured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.QUOTE_FROM_EMAIL && process.env.SALES_NOTIFICATION_EMAIL);
}

export function emailConfigured() {
  return configured();
}

function lines(record: LeadRecord) {
  return Object.entries(record.fields)
    .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(", ") : value}`)
    .join("\n");
}

export async function persistDevLead(record: LeadRecord & { delivered: boolean }) {
  if (process.env.NODE_ENV !== "development") return;
  const dir = path.join(process.cwd(), ".data");
  await mkdir(dir, { recursive: true });
  await appendFile(path.join(dir, "leads.json"), `${JSON.stringify({ ...record, savedAt: new Date().toISOString() })}\n`, "utf8");
}

export async function deliverLead(record: LeadRecord) {
  if (!configured()) {
    return { ok: false as const, code: "delivery_not_configured" as const };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = process.env.QUOTE_FROM_EMAIL as string;
  const sales = process.env.SALES_NOTIFICATION_EMAIL as string;
  const replyTo = String(record.fields["Business email"] ?? "");
  const subject =
    record.kind === "assessment"
      ? `Annual quote request ${record.reference}`
      : `Website message ${record.reference}`;

  const salesResult = await resend.emails.send({
    from,
    to: sales,
    replyTo: replyTo || undefined,
    subject,
    text: `${site.legalName} received a ${record.kind} submission.\n\nReference: ${record.reference}\n\n${lines(record)}\n`,
  });

  if (salesResult.error) {
    return { ok: false as const, code: "sales_email_failed" as const };
  }

  const customer = await resend.emails.send({
    from,
    to: replyTo,
    subject: `We received your request ${record.reference}`,
    text: [
      "Cheetara Prints received your request.",
      "",
      `Reference: ${record.reference}`,
      "",
      "A colleague will review what you sent and follow up at the business email or telephone you provided. This message does not promise a response time.",
      "",
      site.legalName,
      site.url,
    ].join("\n"),
  });

  return {
    ok: true as const,
    confirmationSent: !customer.error,
  };
}

export function referenceNumber() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  const body = Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join("");
  return `CP-${new Date().getFullYear()}-${body}`;
}
