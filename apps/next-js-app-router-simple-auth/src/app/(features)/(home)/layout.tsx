import { getSession } from "@/app/(features)/(auth)/session/server-actions/getSession";
import { Header } from "@/app/components/Header/Header";
import { redirect } from "next/navigation";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/sign-in");
  }

  return (
    <div>
      <Header />
      <main className="p-8">{children}</main>
    </div>
  );
}
