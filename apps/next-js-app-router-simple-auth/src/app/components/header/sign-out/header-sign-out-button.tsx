"use client";

import { useSignOut } from "@/app/features/auth/api/sign-out";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export const HeaderSignOutButton = () => {
  const router = useRouter();

  const { mutate: logout } = useSignOut({
    options: {
      onSuccess: () => {
        router.replace("/sign-in");
      },
    },
  });

  return (
    <button className="flex gap-2 text-cyan-600" onClick={() => logout()}>
      <p className="font-semibold">LOGOUT</p>
      <LogOut />
    </button>
  );
};
