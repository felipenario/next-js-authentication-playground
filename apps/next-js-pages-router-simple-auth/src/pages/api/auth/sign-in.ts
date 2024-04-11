import { IronSessionData, ironSessionOptions } from "@/lib/iron-session";
import { UserCredentials } from "@/types/user-credentials";
import { getIronSession } from "iron-session";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserCredentials | { message: string }>
) {
  const body: {
    email: string;
    password: string;
  } = req.body;

  const signInRes = await fetch(
    `${process.env.NEXT_NEST_JS_SERVICE_URL}/auth/sign-in`,
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
    return res.status(401).json({ message: signInData.message });
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

  return res.status(200);
}
