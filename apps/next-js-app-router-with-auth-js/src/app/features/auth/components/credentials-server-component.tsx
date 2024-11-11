import { auth } from "@/app/lib/auth";

export const CredentialsServerComponent = async () => {
  const session = await auth();

  if (!session?.user) {
    return null;
  }

  console.log(session.error);

  return (
    <div className="flex flex-col max-w-full gap-6">
      <h2 className="text-2xl">Server Tokens</h2>
      <p className="break-words">Access Token: {session.user.accessToken}</p>
      <p className="break-words">Refresh Token: {session.user.refreshToken}</p>
    </div>
  );
};
