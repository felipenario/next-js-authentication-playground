"use client";

import { Button } from "@/app/components/ui/button";
import { signOut } from "next-auth/react";

export const SignOutButton = () => {
  return (
    <Button
      onClick={async () => {
        await signOut({
          redirectTo: "/sign-in",
        });
      }}
    >
      Sign Out
    </Button>
  );
};
