"use client";

export default function Footer() {
  return (
    <footer className="bg-[#182317] text-[#f8faf6] py-14 px-4 text-center border-t border-[#be9953]/30 mt-16">
      <div className="max-w-2xl mx-auto space-y-4">
        {/* Couple Names */}
        <h2 className="font-cormorant text-3xl sm:text-4xl text-white font-bold tracking-tight">
          Ж.Хишигбаяр & Б.Мөнхжаргал
        </h2>

        <div className="w-16 h-[1px] bg-[#be9953]/50 mx-auto my-3"></div>

        {/* User requested Footer Text */}
        <p className="font-serif text-xl sm:text-2xl text-[#e9c176] italic font-medium">
          Бид таныг хүлээж байна
        </p>

        <p className="text-xs text-[#be9953]/70 uppercase tracking-widest pt-4">
          2026.09.12 • Crystal Palace
        </p>
      </div>
    </footer>
  );
}
