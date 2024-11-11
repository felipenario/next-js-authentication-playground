import { MutationFnOptions } from "@/app/lib/react-query";
import { useMutation } from "@tanstack/react-query";

export const signOut = async () => {
  const response = await fetch("http://localhost:3010/api/auth/sign-out", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw {
      message: "Error when signing out",
    };
  }

  return responseBody as { message: string };
};

export const useSignOut = ({
  options,
}: {
  options?: MutationFnOptions<typeof signOut>;
} = {}) => {
  return useMutation({
    ...options,
    mutationFn: signOut,
  });
};
