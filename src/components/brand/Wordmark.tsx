import Image from "next/image";
import Link from "next/link";

type Props = {
  tone?: "light" | "dark";
};

export function Wordmark(_props: Props = {}) {
  return (
    <Link
      href="/"
      className="relative z-0 block h-10 w-[10.75rem] shrink-0 overflow-hidden"
      aria-label="Cheetara Prints home"
    >
      <Image
        src="/images/cheetara-logo.png"
        alt=""
        width={460}
        height={160}
        className="h-10 w-auto max-h-10 object-contain object-left"
        priority
      />
    </Link>
  );
}
