"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="invitation-main" className="relative min-h-screen flex flex-col items-center justify-start text-center px-4 py-10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/18cqNZpC.jpg"
          alt="Ж.Хишигбаяр & Б.Мөнхжаргал"
          fill
          priority
          className="object-cover object-top opacity-75 sm:opacity-80 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8faf6]/60 via-[#f8faf6]/30 to-[#f8faf6]/70"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-xl w-full mx-auto space-y-6 pt-4">
        {/* Top Header Card - Fully Transparent */}
        <div className="bg-transparent p-6 sm:p-10 rounded-3xl text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-[#be9953] font-bold">
            Хуримын Урилга
          </p>

          <h1 className="font-cormorant text-4xl sm:text-6xl font-bold text-[#182317] tracking-tight drop-shadow-sm">
            Ж.Хишигбаяр
            <span className="block text-2xl sm:text-3xl gold-gradient-text my-1 font-serif">
              &
            </span>
            Б.Мөнхжаргал
          </h1>

          <p className="text-sm sm:text-base text-[#182317] font-semibold tracking-wide drop-shadow-sm">
            хүү Х.Тогтуун
          </p>

          {/* Date, Time & Location */}
          <div className="pt-2 space-y-2">
            <p className="font-playfair text-2xl sm:text-3xl text-[#182317] font-bold drop-shadow-sm">
              2026.09.12
            </p>
            <p className="text-xs sm:text-sm text-[#be9953] uppercase tracking-widest font-bold">
              17:00 ЦАГТ
            </p>

            <div className="pt-2 space-y-0.5">
              <p className="text-sm text-[#be9953] uppercase tracking-wider font-bold">
                Ховд аймаг
              </p>
              <p className="text-lg sm:text-xl font-bold text-[#182317] drop-shadow-sm">
                Crystal Palace
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
