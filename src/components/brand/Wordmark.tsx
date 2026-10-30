import Link from "next/link";

type Props = {
  tone?: "light" | "dark";
};

/**
 * Temporary typographic treatment for Cheetara Prints.
 * This is not an approved trademark or final logo.
 */
export function Wordmark({ tone = "dark" }: Props) {
  const ink = tone === "light" ? "text-white" : "text-navy";
  const mark = tone === "light" ? "border-white/30 text-green" : "border-navy/15 bg-navy text-green";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 ${ink}`} aria-label="Cheetara Prints home">
      <span className={`grid size-10 place-items-center rounded-full border ${mark}`} aria-hidden="true">
        <svg viewBox="0 0 24 24" className="size-5" fill="none">
          <path d="M5 16.5 12 6l7 10.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M7.5 16.5h9" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-heading text-[1.35rem] font-semibold tracking-[-0.04em]">Cheetara</span>
        <span className="mt-1 block font-mono text-[9px] font-medium uppercase tracking-[0.22em] opacity-70">Prints</span>
      </span>
    </Link>
  );
}
