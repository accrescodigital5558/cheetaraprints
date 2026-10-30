import { HomePage } from "@/components/sections/HomePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Managed Print Services",
  "Cheetara Prints manages business printing across the United States with remote fleet oversight and one annual agreement.",
  "/",
);

export default function Page() {
  return <HomePage />;
}
