import { UserCredentials } from "@/app/types/user-credentials";
import { isTokenCloseToExpire } from "@/app/utils/isTokenCloseToExpire";
import { cookies } from "next/headers";

export async function GET() {
  const accessToken = cookies().get("access-token")?.value;

  const refreshToken = cookies().get("refresh-token")?.value;

  console.log("teste", cookies().getAll());

  console.log(accessToken);
  console.log(refreshToken);

  if (!accessToken || !refreshToken) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  const isAccessTokenCloseToExpire = isTokenCloseToExpire(accessToken, 55);

  if (isAccessTokenCloseToExpire) {
    const refreshRes = await fetch(
      `${process.env.NEXT_NEST_JS_SERVICE_URL}/auth/refresh-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accessToken,
          refreshToken,
        }),
      }
    );

    const body = await refreshRes.json();

    if (!refreshRes.ok) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    const typedBody = body as UserCredentials;

    cookies().set({
      name: "access-token",
      value: typedBody.accessToken,
      httpOnly: true,
    });

    cookies().set({
      name: "refresh-token",
      value: typedBody.refreshToken,
      httpOnly: true,
    });

    console.log("cookies.getAll()", cookies().getAll());

    return Response.json(
      {
        accessToken: typedBody.accessToken,
        refreshToken: typedBody.refreshToken,
      },
      { status: 200 }
    );
  }

  return Response.json(
    {
      accessToken: accessToken,
      refreshToken: refreshToken,
    },
    { status: 200 }
  );
}
