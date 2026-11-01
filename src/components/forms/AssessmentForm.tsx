"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { assessmentSchema, type AssessmentInput } from "@/lib/validation/leads";
import { challengeOptions, companySizes, deliveryNeeds, industries, officeLocationOptions, printerCounts, serviceOptions } from "@/data/options";
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
  "remote-printer-support": "Printer Support",
  enterprise: "Enterprise Print Management",
};

type Success = { reference: string; confirmationSent: boolean };

type Props = {
  presetService?: (typeof serviceOptions)[number];
  variant?: "full" | "lp";
};

const lpSteps = [
  { title: "Your desk", fields: ["firstName", "lastName", "businessEmail", "businessPhone", "companyName"] as const },
  { title: "The fleet", fields: ["industry", "companySize", "officeLocations", "printerCount", "onSiteNeed", "remoteNeed"] as const },
  { title: "Send the request", fields: ["privacyConsent"] as const },
];

export function AssessmentForm({ presetService, variant = "full" }: Props) {
  const params = useSearchParams();
  const [startedAt] = useState(() => Date.now());
  const [step, setStep] = useState(0);
  const [success, setSuccess] = useState<Success | null>(null);
  const [serverMessage, setServerMessage] = useState("");
  const compact = variant === "lp";
  const challenge = challengeFromQuery[params.get("challenge") ?? ""];
  const service = serviceFromQuery[params.get("service") ?? ""] ?? presetService;

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
      onSiteNeed: undefined,
      remoteNeed: undefined,
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
      <div className={compact ? "" : "rounded-[26px] border border-line bg-paper p-8"}>
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
  const current = lpSteps[step];

  async function goNext() {
    const ok = await form.trigger([...current.fields]);
    if (ok) setStep((value) => Math.min(value + 1, lpSteps.length - 1));
  }

  const contactFields = (
    <>
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
    </>
  );

  const fleetFields = (
    <>
      <Select name="industry" label="Industry" options={industries} form={form} />
      <Select name="companySize" label="Company size" options={companySizes} form={form} />
      <Select name="officeLocations" label="Office locations" options={officeLocationOptions} form={form} />
      <Select name="printerCount" label="Printer count" options={printerCounts} form={form} />
      <Select name="onSiteNeed" label="On-site service" options={deliveryNeeds} form={form} />
      <Select name="remoteNeed" label="Distance support" options={deliveryNeeds} form={form} />
    </>
  );

  const notesAndConsent = (
    <>
      <div className="sm:col-span-2">
        <Label htmlFor="additionalInformation">Additional information</Label>
        <textarea id="additionalInformation" rows={compact ? 3 : 5} className={controlClass} placeholder="Models you know, and any operational detail that should shape the agreement." {...form.register("additionalInformation")} />
        <FieldErrorText error={errors.additionalInformation} />
      </div>
      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-[15px] leading-6">
          <input type="checkbox" className="mt-1 size-4 accent-navy" {...form.register("privacyConsent")} />
          <span>
            I agree that Cheetara Prints may use these details to review this annual quote request, as described in the{" "}
            <Link href="/privacy-policy" className="underline decoration-green underline-offset-4">privacy policy</Link>.
          </span>
        </label>
        <FieldErrorText error={errors.privacyConsent} />
      </div>
    </>
  );

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="relative grid gap-6" noValidate>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Fax
          <input tabIndex={-1} autoComplete="off" {...form.register("faxNumber")} />
        </label>
      </div>
      {compact ? (
        <>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              Step {step + 1} of {lpSteps.length} · {current.title}
            </p>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-line">
              <div className="h-full bg-green motion-safe:transition-[width] motion-safe:duration-300" style={{ width: `${((step + 1) / lpSteps.length) * 100}%` }} />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {step === 0 ? contactFields : null}
            {step === 1 ? fleetFields : null}
            {step === 2 ? notesAndConsent : null}
          </div>
        </>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            {contactFields}
            {fleetFields}
          </div>
          <CheckGroup name="requestedServices" label="Services required" options={serviceOptions} form={form} />
          <CheckGroup name="challenges" label="Current challenges" hint="Optional." options={challengeOptions} form={form} />
          <div className="grid gap-5">{notesAndConsent}</div>
        </>
      )}
      {serverMessage ? <p className="text-sm text-danger">{serverMessage}</p> : null}
      <div className="flex flex-wrap gap-3">
        {compact && step > 0 ? (
          <button type="button" className="inline-flex w-fit items-center rounded-full border border-line px-6 py-3 text-[15px] font-medium text-ink" onClick={() => setStep((value) => value - 1)}>
            Back
          </button>
        ) : null}
        {compact && step < lpSteps.length - 1 ? (
          <button type="button" className="inline-flex w-fit items-center rounded-full bg-navy px-6 py-3 text-[15px] font-medium tracking-[-0.01em] text-white transition-colors duration-300 hover:bg-[#18324f]" onClick={goNext}>
            Continue
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-fit items-center rounded-full bg-navy px-6 py-3 text-[15px] font-medium tracking-[-0.01em] text-white transition-colors duration-300 hover:bg-[#18324f] disabled:opacity-60"
          >
            {isSubmitting ? "Sending" : "Get an Annual Quote"}
          </button>
        )}
      </div>
    </form>
  );
}

function Select({
  name,
  label,
  options,
  form,
}: {
  name: "industry" | "companySize" | "officeLocations" | "printerCount" | "onSiteNeed" | "remoteNeed";
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
  name: "requestedServices" | "challenges";
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
