import { Pill } from "@/components/ui/Pill";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[760px] flex-col justify-center px-5 py-32">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-green">404</p>
      <h1 className="mt-4 font-heading text-[48px] tracking-[-0.04em]">That page is not on this site.</h1>
      <p className="mt-4 text-[17px] leading-7 text-muted">The address may be mistyped. The annual quote form is still available.</p>
      <div className="mt-8">
        <Pill href="/">Back to the homepage</Pill>
      </div>
    </section>
  );
}
