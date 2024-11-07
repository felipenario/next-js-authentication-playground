import { ironSessionOptions } from "@/app/lib/iron-session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const session = await getIronSession(cookies(), ironSessionOptions);
}
