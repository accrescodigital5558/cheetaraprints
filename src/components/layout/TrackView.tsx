"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export function TrackView({ name, detail }: { name: string; detail?: string }) {
  useEffect(() => {
    track(name, detail ? { detail } : undefined);
  }, [name, detail]);

  return null;
}
