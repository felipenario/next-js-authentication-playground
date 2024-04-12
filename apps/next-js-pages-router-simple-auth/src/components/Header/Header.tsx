import { Gamepad2, LogOut } from "lucide-react";
import { useRouter } from "next/router";

export const Header = () => {
  const { push } = useRouter();

  const logout = async () => {
    const signInRes = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/auth/sign-out`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (signInRes.ok) {
      push("/sign-in");
    }
  };

  return (
    <div className="relative left-0 top-0 flex h-20 w-full items-center justify-between p-4 shadow-lg">
      <div className="flex items-center gap-4">
        <Gamepad2 className="size-12" />
        <p className="text-2xl">Games</p>
      </div>
      <button
        className="flex gap-2 font-sans font-semibold text-cyan-600"
        onClick={() => logout()}
      >
        LOGOUT
        <LogOut />
      </button>
    </div>
  );
};
