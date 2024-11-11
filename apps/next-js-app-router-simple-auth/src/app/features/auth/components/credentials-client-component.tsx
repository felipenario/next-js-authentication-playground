"use client";

import { useSession } from "@/app/features/auth/api/get-session";

export const CredentialsClientComponent = () => {
  const { data: session, isLoading } = useSession();

  if (isLoading) {
    return <div>Loading Client...</div>;
  }

  return (
    <div className="flex max-w-full flex-col gap-6">
      <h2 className="text-2xl">Client Tokens</h2>
      <p className="break-words">Access Token: {session?.accessToken}</p>
      <p className="break-words">Refresh Token: {session?.refreshToken}</p>
    </div>
  );
};
