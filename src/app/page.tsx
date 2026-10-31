import { HomePage } from "@/components/sections/HomePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "On-Site and Remote Managed Print",
  "Cheetara Prints provides on-site and remote managed print services under one annual agreement.",
  "/",
);

export default function Page() {
  return <HomePage />;
}
