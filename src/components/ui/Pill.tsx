"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { track } from "@/lib/analytics";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  tone?: "onDark" | "onLight";
  event?: string;
  eventParams?: Record<string, string>;
};

export function Pill({ href, children, variant = "solid", tone = "onLight", event, eventParams }: Props) {
  const solid = "bg-navy text-white hover:bg-[#18324f]";
  const ghostDark = "border border-white/25 bg-white/10 text-white hover:bg-white/15";
  const ghostLight = "border border-line bg-paper text-ink hover:bg-ground";
  const styles = variant === "solid" ? solid : tone === "onDark" ? ghostDark : ghostLight;

  return (
    <Link
      href={href}
      onClick={() => {
        if (event) track(event, eventParams);
      }}
      className={`inline-flex items-center gap-3 rounded-full px-5 py-3 text-[15px] font-medium tracking-[-0.01em] transition-[background-color,border-color,color,transform] duration-300 ${styles}`}
    >
      {children}
      <span className="grid size-6 place-items-center rounded-full bg-white/15">
        <ArrowRight className="size-3.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
