import { getSession } from "@/app/features/auth/api/get-session";
import {
  ironSessionCookieName,
  IronSessionData,
  ironSessionOptions,
} from "@/app/lib/iron-session";
import {
  FetchClientError,
  FetchClientProps,
  FetchDefaultErrorResponse,
} from "@/app/types/fetch-client-types";
import { isServer } from "@tanstack/react-query";
import { unsealData } from "iron-session";

export const nestServiceFetch = async <TData = any>(
  path: string,
  init: FetchClientProps = {}
) => {
  let defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (isServer) {
    const { cookies } = await import("next/headers");

    const cookieSession = cookies().get(ironSessionCookieName);

    if (cookieSession) {
      const unsealedData = await unsealData<IronSessionData>(
        cookieSession.value,
        ironSessionOptions
      );

      defaultHeaders = {
        "Content-Type": "application/json",
        ...(unsealedData.isLoggedIn && {
          Authorization: `Bearer ${unsealedData.accessToken}`,
        }),
      };
    }
  } else {
    try {
      const session = await getSession();

      defaultHeaders = {
        "Content-Type": "application/json",
        ...(session.isLoggedIn && {
          Authorization: `Bearer ${session.accessToken}`,
        }),
      };
    } catch {}
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
