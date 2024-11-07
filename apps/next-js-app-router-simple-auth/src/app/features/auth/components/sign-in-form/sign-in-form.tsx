"use client";

import { signIn } from "@/app/features/auth/actions/sign-in";
import { Button } from "@/app/components/button/button";
import { Input } from "@/app/components/input/input";
import { mergeCn } from "@/app/utils/merge-cn";
import { Info } from "lucide-react";
import { useFormState } from "react-dom";

export const SignInForm = () => {
  const [state, action] = useFormState(signIn, null);

  return (
    <form action={action} className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Input
          className={mergeCn(state?.error && "border-red-600")}
          placeholder="Email"
          name="email"
          type="email"
        />
        <Input
          className={mergeCn(state?.error && "border-red-600")}
          placeholder="Password"
          name="password"
          type="password"
        />
        {state && state.error && (
          <div className="flex items-center gap-1 text-red-600">
            <Info className="size-5" />
            <span className="text-sm">{state.message}</span>
          </div>
        )}
      </div>
      <Button type="submit">Sign In</Button>
    </form>
  );
};
