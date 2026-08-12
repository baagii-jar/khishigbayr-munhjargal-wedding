"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="invitation-main" className="relative w-full min-h-screen flex items-center justify-center py-0 sm:py-8 px-0 sm:px-4 bg-[#f8faf6]">
      {/* Container - Full screen height on mobile, framed elegant card on PC with blank sides */}
      <div className="relative w-full max-w-xl min-h-screen sm:min-h-[90vh] sm:rounded-3xl overflow-hidden shadow-none sm:shadow-2xl border-0 sm:border sm:border-[#be9953]/30 bg-[#f8faf6] flex flex-col justify-end text-center">

        {/* Background Image Container - Image positioned object-top so faces are top 50% */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/18cqNZpC.jpg"
            alt="Ж.Хишигбаяр & Б.Мөнхжаргал"
            fill
            priority
            className="object-cover object-top scale-100 sm:scale-105"
          />
          {/* Gradient: Top 40% fully clear so faces are unobscured, transitioning down to background color */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f8faf6]/30 via-[42%] to-[#f8faf6] to-[72%]"></div>
        </div>

        {/* Main Content - Text pushed down below the 50% picture mark */}
        <div className="relative z-10 w-full px-4 pt-[46vh] sm:pt-[45vh] pb-8 sm:pb-12 flex flex-col items-center justify-end">

          <div className="w-full max-w-md mx-auto space-y-3.5 px-2">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#be9953] font-bold">
              Хуримын Урилга
            </p>

            <h1 className="font-cormorant text-3xl sm:text-5xl font-bold text-[#182317] tracking-tight leading-tight">
              Ж.Хишигбаяр
              <span className="inline-block mx-2 text-xl sm:text-2xl gold-gradient-text font-serif">
                &
              </span>
              Б.Мөнхжаргал
            </h1>

            <p className="text-xs sm:text-sm text-[#182317] font-semibold tracking-wide">
              хүү Х.Тогтуун
            </p>

            {/* Decorative Divider Line */}
            <div className="w-24 mx-auto my-3 border-t border-[#be9953]/40"></div>

            {/* Bottom Words - Formatted in ONE single line on mobile & PC */}
            <div className="pt-1">
              <p className="text-[10.5px] min-[360px]:text-[11.5px] min-[390px]:text-xs sm:text-sm font-bold text-[#182317] tracking-tight min-[360px]:tracking-normal sm:tracking-wider whitespace-nowrap flex items-center justify-center gap-1 sm:gap-2">
                <span>Ховд аймаг</span>
                <span>Crystal Palace</span>
                <span className="opacity-60">•</span>
                <span className="font-playfair">2026.09.12</span>
                <span>17:00 ЦАГТ</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

