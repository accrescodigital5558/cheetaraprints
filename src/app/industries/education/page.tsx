import { IndustryView } from "@/components/services/IndustryView";
import { getIndustry } from "@/data/industries";
import { pageMetadata } from "@/lib/seo";

const industry = getIndustry("education")!;

export const metadata = pageMetadata(industry.seoTitle, industry.seoDescription, industry.href);

export default function Page() {
  return <IndustryView industry={industry} />;
}
