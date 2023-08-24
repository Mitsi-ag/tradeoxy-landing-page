import { Layout } from "@/components/index";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col">
      <Toaster />
      <div className="w-full max-md:hidden">
        <Layout.Header.Desktop />
      </div>
      <div className="hidden w-full max-md:block">
        <Layout.Header.Mobile />
      </div>
      <Component {...pageProps} />
      <div className="h-52" />
      <Layout.Footer />
    </div>
  );
}
