import "@/styles/globals.css";
import { AppPropsWithLayout } from "@/types/next-page-with-layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
