"use client";

import { logout } from "@/app/(auth)/sign-out/server-actions/logout";
import { LogOut } from "lucide-react";

export const HeaderSignOutButton = () => {
  return (
    <button className="flex gap-2 text-cyan-600" onClick={() => logout()}>
      <p className="font-semibold">LOGOUT</p>
      <LogOut />
    </button>
  );
};
