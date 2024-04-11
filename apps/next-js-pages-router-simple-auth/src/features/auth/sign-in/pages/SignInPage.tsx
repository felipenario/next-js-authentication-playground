import { SignInForm } from "@/features/auth/sign-in/components/SignInForm/SignInForm";
import { AuthLayout } from "@/layouts/AuthLayout/AuthLayout";
import { NextPageWithLayout } from "@/types/next-page-with-layout";
import { ReactElement } from "react";

export const SignInPage: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center gap-3">
        <span className="text-2xl font-semibold leading-normal">Sign in</span>
        <p className="leading-normal">Use your Gaming Account</p>
      </div>
      <SignInForm />
    </div>
  );
};

SignInPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};
