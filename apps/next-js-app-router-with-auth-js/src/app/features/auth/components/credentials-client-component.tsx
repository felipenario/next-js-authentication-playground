"use client";

import { useSession } from "next-auth/react";

export const CredentialsClientComponent = () => {
  const { data: session, status } = useSession();


  if (status === "loading") {
    return <div>Loading Client...</div>;
  }

  return (
    <div className="flex flex-col max-w-full gap-6">
      <h2 className="text-2xl">Client Tokens</h2>
      <p className="break-words">Access Token: {session?.user?.accessToken}</p>
      <p className="break-words">
        Refresh Token: {session?.user?.refreshToken}
      </p>
    </div>
  );
};
