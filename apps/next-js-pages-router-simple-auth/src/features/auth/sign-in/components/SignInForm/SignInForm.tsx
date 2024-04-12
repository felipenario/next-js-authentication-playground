import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { SignInFormFields } from "@/features/auth/sign-in/types/sign-in-form-fields";
import { mergeCn } from "@/utils/mergeCn";
import { Info } from "lucide-react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

export const SignInForm = () => {
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormFields>({
    reValidateMode: "onSubmit",
  });

  const onSubmit: SubmitHandler<SignInFormFields> = async (data) => {
    const signInRes = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/auth/sign-in`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      }
    );

    if (signInRes.ok) {
      push("/");
    }
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <Input
          className={mergeCn(errors.email && "border-red-600")}
          placeholder="Email"
          type="email"
          {...register("email", {
            required: "Type a email",
          })}
        />
        <Input
          className={mergeCn(errors.password && "border-red-600")}
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "Type a password",
          })}
        />
        {(errors.email || errors.password) && (
          <div className="flex items-center gap-1 text-red-600">
            <Info className="size-5" />
            <span className="text-sm">
              {errors.email?.message || errors.password?.message}
            </span>
          </div>
        )}
      </div>
      <Button type="submit">Sign In</Button>
    </form>
  );
};
