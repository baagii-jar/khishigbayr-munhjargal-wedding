"use client";

export default function InvitationQuote() {
  return (
    <section id="quote" className="py-12 px-4 max-w-4xl mx-auto text-center">
      <div className="relative p-8 sm:p-14 rounded-3xl bg-white/80 backdrop-blur-md border border-[#be9953]/30 gold-glow shadow-xl">
        {/* Top Ornament */}
        <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-[#f8faf6] border border-[#be9953]/30 flex items-center justify-center text-[#be9953]">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <p className="text-xs uppercase tracking-[0.25em] text-[#be9953] font-semibold mb-4">
          Эрхэм хүндэт зочин танаа
        </p>

        <h2 className="font-cormorant text-2xl sm:text-4xl text-[#182317] font-semibold italic leading-relaxed sm:leading-loose max-w-2xl mx-auto">
          “Хатан сүйхээр заяа зангидаж, Хаан бугуйвчаар жаргал нэгтгэж буй бидний хуримын ёслолд хүрэлцэн ирэхийг урьж байна”
        </h2>

        <div className="botanical-divider w-1/3 mx-auto mt-8 mb-2"></div>
      </div>
    </section>
  );
}
