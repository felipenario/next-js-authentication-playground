import { verifyUserSession } from "@/app/(auth)/utils/verify-user-session";
import { Header } from "@/app/components/Header/Header";
import { cookies } from "next/headers";

export default function LoggedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  verifyUserSession();
  const accessToken = cookies().get("access-token")?.value;

  const refreshToken = cookies().get("refresh-token")?.value;

  console.log(accessToken);
  console.log(refreshToken);

  return (
    <div>
      <Header />
      <main className="p-8">{children}</main>
    </div>
  );
}
