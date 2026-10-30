import type { FieldError } from "react-hook-form";

export function FieldErrorText({ error }: { error?: FieldError }) {
  if (!error?.message) return null;
  return <p className="mt-2 text-sm text-danger">{error.message}</p>;
}

export const controlClass =
  "mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-[16px] text-ink outline-none transition-colors duration-300 focus:border-navy";

export function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) {
  return (
    <label htmlFor={htmlFor} className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
      {children}
    </label>
  );
}
