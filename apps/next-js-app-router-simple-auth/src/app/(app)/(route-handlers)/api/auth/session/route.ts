import {
  defaultSession,
  IronSessionData,
  ironSessionOptions,
} from "@/app/lib/iron-session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export async function GET() {
  const session = await getIronSession<IronSessionData>(
    cookies(),
    ironSessionOptions
  );

  if (!session.isLoggedIn) {
    return Response.json(
      {
        ...defaultSession,
      },
      { status: 401 }
    );
  }

  return Response.json({
    ...session,
  });
}
