"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  event?: string;
  external?: boolean;
};

export function TrackedLink({ href, children, className, event, external }: Props) {
  const onClick = () => {
    if (event) track(event);
  };

  if (external) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
