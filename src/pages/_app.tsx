import { Footer } from "@/components/footer/Footer";
import "@/styles/globals.css";
import "@/components/service/Service.css";
import "@/components/news/News.css";
import "@/components/contact/Contact.css";
import "@/components/header/Header.css";
import type { AppProps } from "next/app";
import { Header } from "@/components/header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
