import { useEffect } from "react";
import "@/styles/globals.css";
import "../styles/users.css";


export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    fetch("/api/visitor")
      .then(res => res.json())
      .then(data => console.log("Ziyaretçi kaydedildi:", data))
      .catch(err => console.error("Ziyaretçi kaydedilemedi:", err));
  }, []);

  return <Component {...pageProps} />;
}