"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Pill } from "@/components/ui/Pill";
import { easeOut } from "@/lib/animations";

const problems = [
  {
    id: "spend",
    title: "Uncontrolled printing expenditure",
    detail: "Supplies, service calls, and idle devices get purchased one at a time. An annual agreement starts by counting the fleet, then prices the year.",
  },
  {
    id: "toner",
    title: "Unexpected toner shortages",
    detail: "Cheetara Prints plans replenishment from consumption. Shipment is promised only when the agreement includes a confirmed fulfillment arrangement.",
  },
  {
    id: "downtime",
    title: "Printer downtime",
    detail: "Remote support diagnoses drivers, queues, and connectivity. A fault that needs a part replaced on site is identified as physical repair, not treated as if a technician is already on the way.",
  },
  {
    id: "devices",
    title: "Multiple unmanaged devices",
    detail: "The fleet record lists what you run, where it sits, and how usage will be collected. Live readings and supplied meters are labeled differently.",
  },
  {
    id: "owner",
    title: "No clear fleet ownership",
    detail: "The agreement names an owner. When a device stops, there is a person responsible for the next step instead of a shared inbox.",
  },
  {
    id: "tracking",
    title: "Difficult usage tracking",
    detail: "Reports are built from device meters where they can be read, and from figures you provide where they cannot. Finance can review the method as well as the number.",
  },
];

export function ProblemPicker() {
  const [active, setActive] = useState(problems[0].id);
  const current = problems.find((problem) => problem.id === active) ?? problems[0];
  const reduce = useReducedMotion();

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
      <div className="grid gap-2" role="radiogroup" aria-label="Fleet problems">
        {problems.map((problem, index) => {
          const selected = problem.id === active;
          return (
            <button
              key={problem.id}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => setActive(problem.id)}
              className={`flex items-start gap-4 rounded-[20px] px-4 py-4 text-left transition-colors duration-300 ${selected ? "bg-paper" : "hover:bg-paper/70"}`}
            >
              <span className="font-mono text-[11px] tracking-[0.16em] text-green">{String(index + 1).padStart(2, "0")}</span>
              <span className="font-heading text-xl tracking-[-0.03em] md:text-2xl">{problem.title}</span>
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: reduce ? 0 : 0.35, ease: easeOut }}
          className="rounded-[26px] border border-line bg-paper p-8"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">How Cheetara Prints responds</p>
          <h3 className="mt-4 font-heading text-3xl tracking-[-0.035em]">{current.title}</h3>
          <p className="mt-4 text-[17px] leading-7 text-muted">{current.detail}</p>
          <div className="mt-8">
            <Pill href={`/request-assessment?challenge=${current.id}`} event="quote_cta_click" eventParams={{ location: "problem-picker" }}>
              Get an Annual Quote
            </Pill>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
