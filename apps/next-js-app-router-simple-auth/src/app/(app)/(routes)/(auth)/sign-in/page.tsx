import { SignInForm } from "@/app/features/auth/components/sign-in-form/sign-in-form";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center gap-3">
        <span className="text-2xl font-semibold leading-normal">Sign in</span>
        <p className="leading-normal">Use your Gaming Account</p>
      </div>
      <SignInForm />
    </div>
  );
}
