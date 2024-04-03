import { UserCredentials } from "@/app/types/user-credentials";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const body: UserCredentials = await request.json();

  console.log("antes", cookies().getAll());

  cookies().delete("access-token");
  cookies().delete("refresh-token");

//   cookies().set({
//     name: "access-token",
//     value: body.accessToken,
//     httpOnly: true,
//   });

//   cookies().set({
//     name: "refresh-token",
//     value: body.refreshToken,
//     httpOnly: true,
//   });

  console.log("depois", cookies().getAll());

  return Response.json("Session refreshed!", { status: 200 });
}
