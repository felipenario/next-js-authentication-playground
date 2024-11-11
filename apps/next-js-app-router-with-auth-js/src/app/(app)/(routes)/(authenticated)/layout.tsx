import { SignOutButton } from "@/app/components/sign-out-button";
import { auth } from "@/app/lib/auth";
import { SessionProvider } from "next-auth/react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <main className="flex flex-col">
      <header className="flex w-full items-center justify-end bg-gray-400 p-4 shadow-xl">
        <SignOutButton />
      </header>
      <SessionProvider session={session}>
        <section className="bg-background p-4">{children}</section>
      </SessionProvider>
    </main>
  );
}
