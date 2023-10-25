import "@/styles/globals.css";
import "@/components/service/Service.css";
import "@/components/news/News.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
