import {
  ironSessionCookieName,
  IronSessionData,
  ironSessionOptions,
} from "@/app/lib/iron-session";
import { unsealData } from "iron-session";
import { cookies } from "next/headers";

export const CredentialsServerComponent = async () => {
  const cookieSession = cookies().get(ironSessionCookieName);

  const unsealedData = await unsealData<IronSessionData>(
    cookieSession ? cookieSession.value : "",
    ironSessionOptions
  );

  return (
    <div className="flex max-w-full flex-col gap-6">
      <h2 className="text-2xl">Server Tokens</h2>
      <p className="break-words">Access Token: {unsealedData.accessToken}</p>
      <p className="break-words">Refresh Token: {unsealedData.refreshToken}</p>
    </div>
  );
};
