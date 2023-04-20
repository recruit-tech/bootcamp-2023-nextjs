import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// import loadsh from "lodash";
// loadsh.filter([1, 2, 3], (item) => item > 1);
