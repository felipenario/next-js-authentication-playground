import { IronSessionData, ironSessionOptions } from "@/app/lib/iron-session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export async function POST() {
  const session = await getIronSession<IronSessionData>(
    cookies(),
    ironSessionOptions
  );

  session.destroy();

  return Response.json({
    message: "You have been signed out",
  });
}
