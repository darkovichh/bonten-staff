import { useEffect } from "react";
import "@/styles/globals.css";
import "../styles/users.css";


export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    fetch("/api/visitor"); // IP kaydını başlatır
  }, []);

  return <Component {...pageProps} />;
}