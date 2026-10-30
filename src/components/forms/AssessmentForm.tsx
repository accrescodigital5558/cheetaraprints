"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { assessmentSchema, type AssessmentInput } from "@/lib/validation/leads";
import { challengeOptions, companySizes, industries, officeLocationOptions, printerBrands, printerCounts, serviceOptions } from "@/data/options";
import { site } from "@/config/site";
import { track } from "@/lib/analytics";
import { FieldErrorText, Label, controlClass } from "@/components/forms/fields";

const challengeFromQuery: Record<string, (typeof challengeOptions)[number]> = {
  spend: "Uncontrolled printing expenditure",
  toner: "Unexpected toner shortages",
  downtime: "Printer downtime",
  devices: "Multiple unmanaged devices",
  owner: "No clear fleet ownership",
  tracking: "Difficult usage tracking",
};

const serviceFromQuery: Record<string, (typeof serviceOptions)[number]> = {
  "managed-print-services": "Managed Print Services",
  "printer-fleet-management": "Printer Fleet Management",
  "printer-infrastructure-management": "Printer Infrastructure Management",
  "remote-printer-support": "Remote Printer Support",
  enterprise: "Enterprise Print Management",
};

type Success = { reference: string; confirmationSent: boolean };

export function AssessmentForm() {
  const params = useSearchParams();
  const [startedAt] = useState(() => Date.now());
  const [success, setSuccess] = useState<Success | null>(null);
  const [serverMessage, setServerMessage] = useState("");
  const challenge = challengeFromQuery[params.get("challenge") ?? ""];
  const service = serviceFromQuery[params.get("service") ?? ""];

  const form = useForm<AssessmentInput>({
    resolver: zodResolver(assessmentSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      businessEmail: "",
      businessPhone: "",
      companyName: "",
      industry: undefined,
      companySize: undefined,
      officeLocations: undefined,
      printerCount: undefined,
      printerBrands: [],
      requestedServices: service ? [service] : [],
      challenges: challenge ? [challenge] : [],
      additionalInformation: "",
      privacyConsent: false,
      faxNumber: "",
      startedAt: 0,
    },
  });

  useEffect(() => {
    track("assessment_start");
  }, []);

  async function onSubmit(values: AssessmentInput) {
    setServerMessage("");
    const response = await fetch("/api/assessment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, startedAt }),
    });
    const payload = (await response.json()) as {
      ok?: boolean;
      spam?: boolean;
      reference?: string;
      confirmationSent?: boolean;
      message?: string;
      fieldErrors?: Record<string, string[] | undefined>;
    };

    if (payload.spam) {
      setSuccess({ reference: "", confirmationSent: false });
      return;
    }

    if (!response.ok || !payload.ok || !payload.reference) {
      if (payload.fieldErrors) {
        for (const [key, messages] of Object.entries(payload.fieldErrors)) {
          const message = messages?.[0];
          if (message) form.setError(key as keyof AssessmentInput, { message });
        }
      }
      setServerMessage(payload.message || "The request could not be sent.");
      return;
    }

    track("assessment_submit");
    setSuccess({ reference: payload.reference, confirmationSent: Boolean(payload.confirmationSent) });
  }

  if (success?.reference === "" ) {
    return <p className="text-[17px] leading-7">Thanks. If this was a real request, use the form without automated fields.</p>;
  }

  if (success) {
    return (
      <div className="rounded-[26px] border border-line bg-paper p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-green">Request received</p>
        <h2 className="mt-3 font-heading text-3xl tracking-[-0.03em]">Your assessment request is in.</h2>
        <p className="mt-4 text-[17px] leading-7 text-muted">
          Reference <span className="text-ink">{success.reference}</span>. A colleague will review it and follow up at the business email or telephone you provided. This page does not promise a response time.
        </p>
        {success.confirmationSent ? (
          <p className="mt-3 text-[16px] text-muted">A confirmation was sent to your business email.</p>
        ) : (
          <p className="mt-3 text-[16px] text-muted">The sales notice was accepted. The confirmation email could not be sent.</p>
        )}
        <dl className="mt-6 space-y-2 text-[16px]">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Next step</dt>
            <dd>The team reviews the fleet details you sent and prepares a customized annual quote.</dd>
          </div>
          {site.email ? (
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Email</dt>
              <dd>{site.email}</dd>
            </div>
          ) : null}
          {site.phone ? (
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Telephone</dt>
              <dd>{site.phone}</dd>
            </div>
          ) : null}
        </dl>
        <Link href="/" className="mt-8 inline-block font-medium text-navy underline decoration-green underline-offset-4">
          Back to the homepage
        </Link>
      </div>
    );
  }

  const { errors, isSubmitting } = form.formState;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="relative grid gap-8" noValidate>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Fax
          <input tabIndex={-1} autoComplete="off" {...form.register("faxNumber")} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="firstName">First name</Label>
          <input id="firstName" className={controlClass} autoComplete="given-name" {...form.register("firstName")} />
          <FieldErrorText error={errors.firstName} />
        </div>
        <div>
          <Label htmlFor="lastName">Last name</Label>
          <input id="lastName" className={controlClass} autoComplete="family-name" {...form.register("lastName")} />
          <FieldErrorText error={errors.lastName} />
        </div>
        <div>
          <Label htmlFor="businessEmail">Business email</Label>
          <input id="businessEmail" type="email" className={controlClass} autoComplete="email" {...form.register("businessEmail")} />
          <FieldErrorText error={errors.businessEmail} />
        </div>
        <div>
          <Label htmlFor="businessPhone">Business phone</Label>
          <input id="businessPhone" type="tel" className={controlClass} autoComplete="tel" {...form.register("businessPhone")} />
          <FieldErrorText error={errors.businessPhone} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="companyName">Company name</Label>
          <input id="companyName" className={controlClass} autoComplete="organization" {...form.register("companyName")} />
          <FieldErrorText error={errors.companyName} />
        </div>
        <Select name="industry" label="Industry" options={industries} form={form} />
        <Select name="companySize" label="Company size" options={companySizes} form={form} />
        <Select name="officeLocations" label="Office locations" options={officeLocationOptions} form={form} />
        <Select name="printerCount" label="Printer count" options={printerCounts} form={form} />
      </div>
      <CheckGroup name="printerBrands" label="Printer brands" hint="Optional. These are devices you already own, not partnerships." options={printerBrands} form={form} />
      <CheckGroup name="requestedServices" label="Services required" options={serviceOptions} form={form} />
      <CheckGroup name="challenges" label="Current challenges" hint="Optional." options={challengeOptions} form={form} />
      <div>
        <Label htmlFor="additionalInformation">Additional information</Label>
        <textarea id="additionalInformation" rows={5} className={controlClass} {...form.register("additionalInformation")} />
        <FieldErrorText error={errors.additionalInformation} />
      </div>
      <div>
        <label className="flex items-start gap-3 text-[15px] leading-6">
          <input type="checkbox" className="mt-1 size-4 accent-navy" {...form.register("privacyConsent")} />
          <span>
            I agree that Cheetara Prints may use these details to review this annual quote request, as described in the{" "}
            <Link href="/privacy-policy" className="underline decoration-green underline-offset-4">privacy policy</Link>.
          </span>
        </label>
        <FieldErrorText error={errors.privacyConsent} />
      </div>
      {serverMessage ? <p className="text-sm text-danger">{serverMessage}</p> : null}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-fit items-center rounded-full bg-navy px-6 py-3 text-[15px] font-medium tracking-[-0.01em] text-white transition-colors duration-300 hover:bg-[#18324f] disabled:opacity-60"
      >
        {isSubmitting ? "Sending" : "Get an Annual Quote"}
      </button>
    </form>
  );
}

function Select({
  name,
  label,
  options,
  form,
}: {
  name: "industry" | "companySize" | "officeLocations" | "printerCount";
  label: string;
  options: readonly string[];
  form: ReturnType<typeof useForm<AssessmentInput>>;
}) {
  const error = form.formState.errors[name];
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <select id={name} className={controlClass} defaultValue="" {...form.register(name)}>
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <FieldErrorText error={error} />
    </div>
  );
}

function CheckGroup({
  name,
  label,
  hint,
  options,
  form,
}: {
  name: "printerBrands" | "requestedServices" | "challenges";
  label: string;
  hint?: string;
  options: readonly string[];
  form: ReturnType<typeof useForm<AssessmentInput>>;
}) {
  const selected = form.watch(name);
  const error = form.formState.errors[name];
  return (
    <fieldset>
      <legend className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{label}</legend>
      {hint ? <p className="mt-2 text-sm text-muted">{hint}</p> : null}
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-3 rounded-2xl border border-line bg-paper px-4 py-3 text-[15px]">
            <input
              type="checkbox"
              className="size-4 accent-navy"
              checked={selected.includes(option as never)}
              onChange={(event) => {
                const next = event.target.checked
                  ? [...selected, option]
                  : selected.filter((item) => item !== option);
                form.setValue(name, next as never, { shouldValidate: true });
              }}
            />
            {option}
          </label>
        ))}
      </div>
      <FieldErrorText error={error as never} />
    </fieldset>
  );
}
