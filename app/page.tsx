"use client";

import { useState } from "react";
import OpeningCover from "./components/OpeningCover";
import HeroSection from "./components/HeroSection";
import InvitationQuote from "./components/InvitationQuote";
import ParentsSection from "./components/ParentsSection";
import Footer from "./components/Footer";
import BackgroundMusic from "./components/BackgroundMusic";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    setIsPlayingMusic(true);
  };

  const handleToggleMusic = () => {
    setIsPlayingMusic((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#f8faf6] flex flex-col font-sans selection:bg-[#be9953] selection:text-white">
      <BackgroundMusic
        isPlaying={isPlayingMusic}
        onToggle={handleToggleMusic}
      />

      {!opened ? (
        <OpeningCover onOpen={handleOpen} />
      ) : (
        <main className="flex-grow animate-fade-in transition-all duration-700">
          <HeroSection />
          <InvitationQuote />
          <ParentsSection />
          <Footer />
        </main>
      )}
    </div>
  );
}
