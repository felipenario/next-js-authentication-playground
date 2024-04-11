import { IronSessionData, ironSessionOptions } from "@/lib/iron-session";
import { getIronSession } from "iron-session";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getIronSession<IronSessionData>(
    req,
    res,
    ironSessionOptions
  );

  session.destroy();

  return res.status(200);
}
