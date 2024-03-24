import { Header } from "@/app/components/Header/Header";

export default function LoggedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main className="p-8">{children}</main>
    </div>
  );
}
