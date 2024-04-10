"use server";

import { getSession } from "@/app/(features)/(auth)/session/server-actions/getSession";
import { FetchWrapperProps } from "@/app/types/fetch-wrapper-props";

export const nestServiceFetch = async <TData = any>({
  path,
  init,
}: FetchWrapperProps) => {
  const sessionRes = await getSession();

  if (!sessionRes.isLoggedIn) {
    throw new Error("Unauthorized!");
  }

  const defaultInit: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionRes.accessToken}`,
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
    throw new Error(res.statusText);
  }

  return data as TData;
};
