import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MobileProvider } from "../Context/MobileContext";
import { Confirm } from "../components/Confirm";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MobileProvider>
      <Confirm />
      <Component {...pageProps} />
    </MobileProvider>
  );
}
