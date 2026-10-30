"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { contactSchema, type ContactInput } from "@/lib/validation/leads";
import { track } from "@/lib/analytics";
import { FieldErrorText, Label, controlClass } from "@/components/forms/fields";

type Success = { reference: string; confirmationSent: boolean };

export function ContactForm() {
  const [startedAt] = useState(() => Date.now());
  const [success, setSuccess] = useState<Success | null>(null);
  const [serverMessage, setServerMessage] = useState("");
  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      businessEmail: "",
      businessPhone: "",
      companyName: "",
      message: "",
      privacyConsent: false,
      faxNumber: "",
      startedAt: 0,
    },
  });


  async function onSubmit(values: ContactInput) {
    setServerMessage("");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, startedAt }),
    });
    const payload = (await response.json()) as {
      ok?: boolean;
      reference?: string;
      confirmationSent?: boolean;
      message?: string;
      spam?: boolean;
    };
    if (payload.spam) {
      setSuccess({ reference: "", confirmationSent: false });
      return;
    }
    if (!response.ok || !payload.ok || !payload.reference) {
      setServerMessage(payload.message || "The message could not be sent.");
      return;
    }
    track("contact_click", { location: "contact-form" });
    setSuccess({ reference: payload.reference, confirmationSent: Boolean(payload.confirmationSent) });
  }

  if (success?.reference) {
    return (
      <div className="rounded-[26px] border border-line bg-paper p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-green">Message received</p>
        <h2 className="mt-3 font-heading text-3xl tracking-[-0.03em]">Reference {success.reference}</h2>
        <p className="mt-4 text-[17px] leading-7 text-muted">
          {success.confirmationSent
            ? "A confirmation was sent to your business email. This note does not promise a response time."
            : "The message reached the business inbox. The confirmation email could not be sent, and no response time is promised."}
        </p>
        <Link href="/" className="mt-6 inline-block font-medium underline decoration-green underline-offset-4">
          Back to the homepage
        </Link>
      </div>
    );
  }

  const { errors, isSubmitting } = form.formState;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="relative grid gap-5" noValidate>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Fax
          <input tabIndex={-1} autoComplete="off" {...form.register("faxNumber")} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="contact-first">First name</Label>
          <input id="contact-first" className={controlClass} {...form.register("firstName")} />
          <FieldErrorText error={errors.firstName} />
        </div>
        <div>
          <Label htmlFor="contact-last">Last name</Label>
          <input id="contact-last" className={controlClass} {...form.register("lastName")} />
          <FieldErrorText error={errors.lastName} />
        </div>
      </div>
      <div>
        <Label htmlFor="contact-email">Business email</Label>
        <input id="contact-email" type="email" className={controlClass} {...form.register("businessEmail")} />
        <FieldErrorText error={errors.businessEmail} />
      </div>
      <div>
        <Label htmlFor="contact-phone">Business phone</Label>
        <input id="contact-phone" type="tel" className={controlClass} {...form.register("businessPhone")} />
        <FieldErrorText error={errors.businessPhone} />
      </div>
      <div>
        <Label htmlFor="contact-company">Company name</Label>
        <input id="contact-company" className={controlClass} {...form.register("companyName")} />
        <FieldErrorText error={errors.companyName} />
      </div>
      <div>
        <Label htmlFor="contact-message">Message</Label>
        <textarea id="contact-message" rows={5} className={controlClass} {...form.register("message")} />
        <FieldErrorText error={errors.message} />
      </div>
      <label className="flex items-start gap-3 text-[15px] leading-6">
        <input type="checkbox" className="mt-1 size-4 accent-navy" {...form.register("privacyConsent")} />
        <span>
          I agree that Cheetara Prints may use these details to respond to this message, as described in the{" "}
          <Link href="/privacy-policy" className="underline decoration-green underline-offset-4">privacy policy</Link>.
        </span>
      </label>
      <FieldErrorText error={errors.privacyConsent} />
      {serverMessage ? <p className="text-sm text-danger">{serverMessage}</p> : null}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-fit rounded-full bg-navy px-6 py-3 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-[#18324f] disabled:opacity-60"
      >
        {isSubmitting ? "Sending" : "Send message"}
      </button>
    </form>
  );
}
