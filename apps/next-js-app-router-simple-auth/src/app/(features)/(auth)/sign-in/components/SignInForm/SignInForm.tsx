"use client";

import { signIn } from "@/app/(features)/(auth)/sign-in/server-actions/signIn";
import { Button } from "@/app/components/Button/Button";
import { Input } from "@/app/components/Input/Input";
import { mergeCn } from "@/app/utils/mergeCn";
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
