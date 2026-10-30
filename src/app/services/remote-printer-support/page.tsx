import { ServiceView } from "@/components/services/ServiceView";
import { getService } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

const service = getService("remote-printer-support")!;

export const metadata = pageMetadata(service.seoTitle, service.seoDescription, service.href);

export default function Page() {
  return <ServiceView service={service} />;
}
