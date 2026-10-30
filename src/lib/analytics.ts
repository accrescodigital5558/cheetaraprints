"use client";

type Params = Record<string, string | number | boolean | undefined>;

export function track(name: string, params?: Params) {
  if (typeof window === "undefined") return;
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (!gtag) return;
  gtag("event", name, params);
}
