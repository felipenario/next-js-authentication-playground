export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main className="flex h-dvh items-center justify-center">
        <div className="rounded-lg bg-white p-9 shadow-lg">{children}</div>
      </main>
    </div>
  );
}
