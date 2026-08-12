"use client";

import { useState } from "react";

interface OpeningCoverProps {
  onOpen: () => void;
}

export default function OpeningCover({ onOpen }: OpeningCoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 600);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-4 bg-[#182317] text-white overflow-hidden select-none">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#be9953_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Outer Envelope / Letter Frame */}
      <div
        className={`relative max-w-lg w-full bg-[#f8faf6] text-[#182317] p-8 sm:p-12 rounded-3xl border-2 border-[#be9953] shadow-2xl transition-all duration-700 transform ${
          isOpen ? "scale-105 opacity-0 -translate-y-12" : "scale-100 opacity-100"
        }`}
      >
        <p className="text-center text-xs uppercase tracking-[0.3em] text-[#be9953] font-semibold mb-2">
          Хуримын Урилга
        </p>

        <h1 className="font-cormorant text-center text-3xl sm:text-5xl font-bold text-[#182317] leading-tight my-4">
          Ж.Хишигбаяр
          <span className="block text-2xl gold-gradient-text my-1 font-serif">
            &
          </span>
          Б.Мөнхжаргал
        </h1>

        <p className="text-center text-sm text-[#be9953] font-medium tracking-wider mb-6">
          хүү Х.Тогтуун
        </p>

        {/* Decorative Divider */}
        <div className="botanical-divider w-1/2 mx-auto my-6"></div>

        {/* Open Button */}
        <div className="text-center">
          <button
            onClick={handleOpen}
            className="w-full py-4 px-8 rounded-full gold-gradient-bg text-white font-bold text-sm uppercase tracking-[0.2em] shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer"
          >
            <span>Урилга үзэх</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
