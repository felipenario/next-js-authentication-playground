import { Session } from "@/app/features/auth/api/sign-in";

export const refreshSession = async ({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}) => {
  const response = await fetch("http://localhost:8000/auth/refresh-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ accessToken, refreshToken }),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw Error("Error when refreshing session");
  }

  return responseBody as Session;
};
