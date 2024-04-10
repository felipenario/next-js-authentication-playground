import { getSession } from "@/app/(features)/(auth)/session/server-actions/getSession";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (session.isLoggedIn) {
    redirect("/");
  }

  return (
    <div>
      <main className="flex h-dvh items-center justify-center">
        <div className="rounded-lg bg-white p-9 shadow-lg">{children}</div>
      </main>
    </div>
  );
}
