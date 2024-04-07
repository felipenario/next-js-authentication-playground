"use server";

import { FetchWrapperProps } from "@/app/types/fetch-wrapper-props";
import { UserCredentials } from "@/app/types/user-credentials";
import { headers } from "next/headers";

export const nestServiceFetch = async <TData = any>({
  path,
  init,
}: FetchWrapperProps) => {
  const sessionRes = await fetch(`${process.env.NEXT_URL}/api/session`, {
    method: "GET",
    headers: headers(),
  });

  if (!sessionRes.ok) {
    throw new Error("Unauthorized!");
  }

  const sessionData: UserCredentials = await sessionRes.json();

  const defaultInit: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionData.accessToken}`,
      ...init?.headers,
    },
    ...init,
  };

  const res = await fetch(
    `${process.env.NEXT_NEST_JS_SERVICE_URL}${path}`,
    defaultInit
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Error fetching to service!");
  }

  return data as TData;
};
