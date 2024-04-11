import { SessionOptions } from "iron-session";

export type IronSessionData = {
  accessToken: string;
  refreshToken: string;
  isLoggedIn: boolean;
};

export const defaultSession: IronSessionData = {
  accessToken: "",
  refreshToken: "",
  isLoggedIn: false,
};

export const ironSessionOptions: SessionOptions = {
  password: process.env.NEXT_IRON_SESSION_COOKIE_PASSWORD!,
  cookieName: "session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
