import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const verifyUserSession = () => {
  const accessToken = cookies().get("access-token")?.value;
  const refreshToken = cookies().get("refresh-token")?.value;

  if (!accessToken || !refreshToken) {
    return redirect("/sign-in");
  }
};
