"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="invitation-main" className="relative min-h-screen flex flex-col items-center justify-start text-center px-4 py-8 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/DRrSu6N3.jpg"
          alt="Ж.Хишигбаяр & Б.Мөнхжаргал"
          fill
          priority
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8faf6]/90 via-[#f8faf6]/80 to-[#f8faf6]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-xl w-full mx-auto space-y-6 pt-2">
        {/* Top Header Card */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#be9953]/30 shadow-lg text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#be9953] font-semibold mb-2">
            Хуримын Урилга
          </p>

          <h1 className="font-cormorant text-4xl sm:text-6xl font-bold text-[#182317] tracking-tight my-2">
            Ж.Хишигбаяр
            <span className="block text-2xl sm:text-3xl gold-gradient-text my-1 font-serif">
              &
            </span>
            Б.Мөнхжаргал
          </h1>

          <div className="inline-block px-4 py-1.5 rounded-full bg-[#be9953]/10 border border-[#be9953]/20 my-2">
            <p className="text-sm sm:text-base text-[#182317] font-medium tracking-wide">
              хүү Х.Тогтуун
            </p>
          </div>

          {/* Leaf Divider */}
          <div className="botanical-divider my-4"></div>

          {/* Date, Time & Location */}
          <div className="space-y-2">
            <p className="font-playfair text-2xl sm:text-3xl text-[#2d392b] font-bold">
              2026.09.12
            </p>
            <p className="text-xs sm:text-sm text-[#be9953] uppercase tracking-widest font-semibold">
              17:00 ЦАГТ
            </p>
            <p className="text-base sm:text-lg font-bold text-[#182317] pt-1">
              Crystal Palace
            </p>
          </div>
        </div>

        {/* Full Family Photo Card Below Date & Location */}
        <div className="relative max-w-md mx-auto p-4 bg-white rounded-[2rem] border-2 border-[#be9953] shadow-xl text-center">
          <div className="relative w-full rounded-2xl overflow-hidden">
            <img
              src="/18cqNZpC.jpg"
              alt="Ж.Хишигбаяр & Б.Мөнхжаргал"
              className="w-full h-auto object-contain block rounded-2xl"
            />
          </div>
          <div className="pt-4 pb-1">
            <span className="text-xs text-[#be9953] uppercase tracking-widest font-serif italic font-semibold">
              Ж.ХИШИГБАЯР ♡ Б.МӨНХЖАРГАЛ
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
