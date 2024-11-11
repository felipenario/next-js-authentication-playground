import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signIn as aSignIn } from "@/app/features/auth/api/sign-in";
import "next-auth/jwt";

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    accessToken: string;
    refreshToken: string;
    error?: "RefreshSessionError";
  }
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `auth`, contains information about the active session.
   */
  interface User {
    accessToken: string;
    refreshToken: string;
  }
  /**
   * Returned by `useSession`, `auth`, contains information about the active session.
   */
  interface Session {
    error?: "RefreshSessionError";
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET!,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (credentials.email === "" && credentials.password === "") {
          throw new Error("Invalid credentials");
        }

        try {
          const session = await aSignIn(
            credentials.email as string,
            credentials.password as string
          );

          return {
            accessToken: session.accessToken,
            refreshToken: session.refreshToken,
          };
        } catch {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (account && user) {
        return {
          ...token,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
        };
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.accessToken = token.accessToken;
        session.user.refreshToken = token.refreshToken;
        session.error = token.error;
      }

      return session;
    },
  },
});
