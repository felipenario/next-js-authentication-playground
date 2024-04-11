import { AuthLayoutProps } from "@/layouts/AuthLayout/AuthLayout.types";

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      <main className="flex h-dvh items-center justify-center">
        <div className="rounded-lg bg-white p-9 shadow-lg">{children}</div>
      </main>
    </div>
  );
};
