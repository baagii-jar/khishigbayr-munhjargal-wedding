"use client";

import { useEffect, useRef } from "react";

interface BackgroundMusicProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function BackgroundMusic({ isPlaying, onToggle }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      // Set music volume to half (50%)
      audioRef.current.volume = 0.5;

      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.log("Audio play error:", err);
          });
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <>
      {/* Background Wedding Music Track */}
      <audio
        ref={audioRef}
        src="/marry-you12.mp3"
        loop
        preload="auto"
      />

      {/* Floating Music Toggle Button (Bottom Right) */}
      <button
        onClick={onToggle}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        title={isPlaying ? "Хөгжим зогсоох" : "Хөгжим тоглуулах"}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-white/95 backdrop-blur-md border-2 border-[#be9953] shadow-2xl flex items-center justify-center text-[#be9953] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer gold-glow"
      >
        {isPlaying ? (
          <span className="animate-pulse text-2xl">🎵</span>
        ) : (
          <span className="opacity-50 text-2xl">🔇</span>
        )}
      </button>
    </>
  );
}
