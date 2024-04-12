import { UserCredentials } from "@/types/user-credentials";
import axios from "axios";

export const nestServiceClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NEST_JS_SERVICE_URL,
});

nestServiceClient.interceptors.request.use(
  async (config) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/auth/session`, {
      method: "GET",
      cache: "no-cache",
    });

    if (res.ok) {
      const userCredentials: UserCredentials = await res.json();
      config.headers.Authorization = `Bearer ${userCredentials.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
