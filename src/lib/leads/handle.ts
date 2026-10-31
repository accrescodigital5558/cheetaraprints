import { NextResponse } from "next/server";
import { assessmentSchema, contactSchema, timingError } from "@/lib/validation/leads";
import { allowRequest, clientKey } from "@/lib/security/rate-limit";
import { sameOrigin } from "@/lib/security/origin";
import { cleanText } from "@/lib/security/sanitize";
import { deliverLead, persistDevLead, referenceNumber, type LeadKind } from "@/lib/email/send";

function failure(message: string, status: number, fieldErrors?: Record<string, string[] | undefined>) {
  return NextResponse.json({ ok: false, message, fieldErrors }, { status });
}

export async function handleLead(request: Request, kind: LeadKind) {
  if (!sameOrigin(request)) return failure("The request was refused.", 403);
  if (!allowRequest(`${kind}:${clientKey(request)}`)) {
    return failure("Too many submissions. Wait a few minutes and try again.", 429);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return failure("The submission could not be read.", 400);
  }

  const parsed = kind === "assessment" ? assessmentSchema.safeParse(body) : contactSchema.safeParse(body);
  if (!parsed.success) {
    return failure("Check the highlighted fields.", 400, parsed.error.flatten().fieldErrors);
  }

  if (parsed.data.faxNumber && parsed.data.faxNumber.trim()) {
    return NextResponse.json({ ok: true, spam: true });
  }

  const timing = timingError(parsed.data.startedAt);
  if (timing) return failure(timing, 400);

  const reference = referenceNumber();
  const data = parsed.data;
  const fields: Record<string, string | string[]> = {
    "First name": cleanText(data.firstName, 80),
    "Last name": cleanText(data.lastName, 80),
    "Business email": cleanText(data.businessEmail, 160),
    "Business phone": cleanText(data.businessPhone, 30),
    Company: cleanText(data.companyName, 160),
    "Privacy consent": "Yes",
  };

  if ("requestedServices" in data) {
    fields.Industry = data.industry;
    fields["Company size"] = data.companySize;
    fields["Office locations"] = data.officeLocations;
    fields["Printer count"] = data.printerCount;
    if (data.printerBrands.length) fields["Printer brands"] = data.printerBrands;
    fields.Services = data.requestedServices;
    fields.Challenges = data.challenges;
    fields["On-site service"] = data.onSiteNeed;
    fields["Distance support"] = data.remoteNeed;
    fields.Notes = cleanText(data.additionalInformation, 2000);
  } else {
    fields["On-site service"] = data.onSiteNeed;
    fields["Distance support"] = data.remoteNeed;
    fields.Message = cleanText(data.message, 2000);
  }

  const record = { kind, reference, fields };
  const result = await deliverLead(record);
  await persistDevLead({ ...record, delivered: result.ok });

  if (!result.ok) {
    const message =
      result.code === "delivery_not_configured"
        ? "This form is not connected to a delivery inbox yet. The request was not sent."
        : "The request could not be delivered. Nothing was confirmed.";
    return failure(message, 503);
  }

  return NextResponse.json({
    ok: true,
    reference,
    confirmationSent: result.confirmationSent,
  });
}