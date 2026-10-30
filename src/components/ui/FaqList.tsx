"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { easeOut } from "@/lib/animations";
import type { Faq } from "@/data/faq";

export function FaqList({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => {
        const expanded = open === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
                onClick={() => setOpen(expanded ? null : index)}
              >
                <span className="font-heading text-xl tracking-[-0.03em] text-ink md:text-2xl">{item.question}</span>
                <span className="mt-1 font-mono text-[11px] tracking-[0.16em] text-muted">{expanded ? "Close" : "Open"}</span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.3, ease: easeOut }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-6 text-[17px] leading-7 text-muted">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
