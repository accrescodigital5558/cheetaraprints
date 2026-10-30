import { SolutionView } from "@/components/services/SolutionView";
import { getSolution } from "@/data/solutions";
import { pageMetadata } from "@/lib/seo";

const solution = getSolution("small-business")!;

export const metadata = pageMetadata(solution.seoTitle, solution.seoDescription, solution.href);

export default function Page() {
  return <SolutionView solution={solution} />;
}
