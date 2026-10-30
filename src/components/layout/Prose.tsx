export function Prose({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-[760px] space-y-5 px-5 py-16 text-[17px] leading-8 text-muted lg:py-20 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-[28px] [&_h2]:tracking-[-0.03em] [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc">{children}</div>;
}
