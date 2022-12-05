import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MobileProvider } from "../Context/MobileContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MobileProvider>
      <Component {...pageProps} />
    </MobileProvider>
  );
}
