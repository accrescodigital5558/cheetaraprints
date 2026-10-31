import { Suspense } from "react";
import { PageHero } from "@/components/services/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Request an Assessment",
  "Request a customized annual quote for managed print services from Cheetara Prints.",
  "/request-assessment",
);

export default function RequestAssessmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Annual quote"
        title="Tell us about the fleet."
        lede="The quote is customized. There is no monthly plan and no published package price. Required fields are marked by the form's validation."
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Request an Assessment", path: "/request-assessment" }]} />
      <div className="mx-auto max-w-[860px] px-5 py-16 lg:py-20">
        <Suspense fallback={<p className="text-muted">Loading the form.</p>}>
          <AssessmentForm />
        </Suspense>
      </div>
    </>
  );
}
