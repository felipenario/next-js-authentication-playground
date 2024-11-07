import { getSession } from "@/app/features/auth/actions/get-session";
import { AuthClientProvider } from "@/app/features/auth/providers/auth-client-provider";

export const AuthProvider = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await getSession();

  return <AuthClientProvider session={session}>{children}</AuthClientProvider>;
};
