import { auth } from "@/app/lib/auth";
import {
  FetchClientError,
  FetchClientProps,
  FetchDefaultErrorResponse,
} from "@/app/types/fetchClientTypes";
import { isServer } from "@tanstack/react-query";
import { getSession } from "next-auth/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const nestServiceFetch = async <TData = any>(
  path: string,
  init: FetchClientProps = {}
) => {
  let defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (isServer) {
    const session = await auth();

    defaultHeaders = {
      "Content-Type": "application/json",
      ...(session &&
        session.user && {
          Authorization: `Bearer ${session.user.accessToken}`,
        }),
    };
  } else {
    const session = await getSession();

    console.log(session);

    defaultHeaders = {
      "Content-Type": "application/json",
      ...(session &&
        session.user && {
          Authorization: `Bearer ${session.user.accessToken}`,
        }),
    };
  }

  const headers = {
    ...defaultHeaders,
    ...init.headers,
  };

  const defaultInit: RequestInit = {
    ...init,
    headers,
    cache: "no-store",
  };

  const res = await fetch(`http://localhost:8000${path}`, defaultInit);

  const dataAsString = await res.text();

  const dataAsJson =
    dataAsString === "" ? "" : (JSON.parse(dataAsString) as unknown);

  if (!res.ok) {
    throw {
      statusCode: res.status,
      message:
        (dataAsJson as FetchDefaultErrorResponse).message ?? "Algo deu errado",
      error: dataAsJson,
    } as FetchClientError;
  }

  return dataAsJson as TData;
};
