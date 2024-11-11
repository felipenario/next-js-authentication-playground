import { MutationFnOptions } from "@/app/lib/react-query";
import { useMutation } from "@tanstack/react-query";

export type Session = {
  accessToken: string;
  refreshToken: string;
};

type SignInProps = {
  email: string;
  password: string;
};

export const signIn = async ({ email, password }: SignInProps) => {
  const response = await fetch("http://localhost:3010/api/auth/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw {
      message: "Error when signing in",
    };
  }

  return responseBody as Session;
};

export const useSignIn = ({
  options,
}: {
  options?: MutationFnOptions<typeof signIn>;
} = {}) => {
  return useMutation({
    ...options,
    mutationFn: signIn,
  });
};
