type Props = {
  eyebrow: string;
  title: string;
  lede: string;
};

export function PageHero({ eyebrow, title, lede }: Props) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-[1180px] px-5 pb-16 pt-40 lg:pb-20 lg:pt-44">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-green">{eyebrow}</p>
        <h1 className="mt-4 max-w-[16ch] text-[40px] leading-[0.98] tracking-[-0.04em] lg:text-[56px]">{title}</h1>
        <p className="mt-5 max-w-2xl text-[18px] leading-8 text-white/75">{lede}</p>
      </div>
    </section>
  );
}
