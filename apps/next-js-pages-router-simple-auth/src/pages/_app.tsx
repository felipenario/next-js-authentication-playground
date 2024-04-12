import { TanstackQueryProvider } from "@/providers/TanstackQueryProvider";
import "@/styles/globals.css";
import { AppPropsWithLayout } from "@/types/next-page-with-layout";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <main className={inter.className}>
      {getLayout(
        <TanstackQueryProvider>
          <Component {...pageProps} />
        </TanstackQueryProvider>
      )}
    </main>
  );
}
