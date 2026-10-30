import { handleLead } from "@/lib/leads/handle";

export const runtime = "nodejs";

export async function POST(request: Request) {
  return handleLead(request, "contact");
}
