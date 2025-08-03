"use client";
import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = 0.5;
      audio.muted = true; // Sessiz başlat
      audio.play().catch(() => {
        console.log("Otomatik oynatma engellendi, kullanıcı etkileşimi bekleniyor.");
      });

      // İstediğin saniyeden başlat
      audio.currentTime = 45; // 30. saniyeden başla

      // Kullanıcı etkileşiminde sesi aç
      const enableSound = () => {
        audio.muted = false;
        audio.play();
        window.removeEventListener("click", enableSound);
        window.removeEventListener("keydown", enableSound);
        window.removeEventListener("scroll", enableSound);
      };

      window.addEventListener("click", enableSound);
      window.addEventListener("keydown", enableSound);
      window.addEventListener("scroll", enableSound);
    }
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music.mp3"
      autoPlay
      loop
    />
  );
}
