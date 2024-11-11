"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { useForm } from "react-hook-form";
import { useSignIn } from "@/app/features/auth/api/sign-in";
import { useRouter } from "next/navigation";

type FormFields = {
  email: string;
  password: string;
};

export function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const router = useRouter();

  const { mutateAsync: signIn } = useSignIn({
    options: {
      onSuccess: () => {
        router.replace("/");
      },
    },
  });

  const onSubmit = async (data: FormFields) => {
    signIn(data);
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              defaultValue="testerson.silva@test.com"
              placeholder="m@example.com"
              required
              {...register("email", { required: true })}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              defaultValue="test123"
              required
              {...register("password", { required: true })}
            />
          </div>
          {(errors.email || errors.password) && <p>{JSON.stringify(errors)}</p>}
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
