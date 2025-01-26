// pages/_app.tsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import "@/styles/globals.css";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <ScrollProgress />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
