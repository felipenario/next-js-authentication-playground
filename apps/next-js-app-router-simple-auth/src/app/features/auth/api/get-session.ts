"use client";

import { IronSessionData } from "@/app/lib/iron-session";
import { useSuspenseQuery } from "@tanstack/react-query";

export const getSession = async () => {
  const response = await fetch("http://localhost:3010/api/auth/session", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw Error("Error when getting session");
  }

  return responseBody as IronSessionData;
};

export const useSession = () => {
  return useSuspenseQuery({
    queryKey: ["session"],
    queryFn: getSession,
  });
};
