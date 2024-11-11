export type Session = {
  accessToken: string;
  refreshToken: string;
};

export const signIn = async (email: string, password: string) => {
  const response = await fetch("http://localhost:8000/auth/sign-in", {
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
