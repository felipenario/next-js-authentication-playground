import { IronSessionData, ironSessionOptions } from "@/lib/iron-session";
import { getIronSession } from "iron-session";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body: {
    email: string;
    password: string;
  } = req.body;

  const signInRes = await fetch(
    `${process.env.NEXT_PUBLIC_NEST_JS_SERVICE_URL}/auth/sign-in`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: body.email,
        password: body.password,
      }),
    }
  );

  const signInData = await signInRes.json();

  if (!signInRes.ok) {
    res.status(401).send({ message: signInData.message });
    return;
  }

  const session = await getIronSession<IronSessionData>(
    req,
    res,
    ironSessionOptions
  );

  session.accessToken = signInData.accessToken;
  session.refreshToken = signInData.refreshToken;
  session.isLoggedIn = true;

  await session.save();

  res.status(200).end();
}
