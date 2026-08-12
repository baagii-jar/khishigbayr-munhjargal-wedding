"use client";

export default function EventDetails() {
  return (
    <section id="details" className="py-12 px-4 bg-[#f1f4ef]/60">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#be9953] font-semibold mb-2">
            Хэзээ & Хаана
          </p>
          <h2 className="font-cormorant text-3xl sm:text-5xl text-[#182317] font-bold">
            Ёслолын мэдээлэл
          </h2>
          <div className="botanical-divider w-24 mx-auto my-4"></div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Date & Time Card */}
          <div className="bg-white p-8 rounded-2xl border border-[#be9953]/20 shadow-md text-center flex flex-col justify-center items-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-full bg-[#f8faf6] border border-[#be9953]/30 flex items-center justify-center text-[#be9953] mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-playfair text-xl font-bold text-[#182317] mb-2">Огноо & Цаг</h3>
            <p className="text-lg font-semibold text-[#be9953] mb-1">
              2026 оны 9 сарын 12
            </p>
            <p className="text-sm text-[#2d392b] font-medium">
              Бямба гараг — 17:00 Цагт
            </p>
          </div>

          {/* Location Card */}
          <div className="bg-white p-8 rounded-2xl border border-[#be9953]/20 shadow-md text-center flex flex-col justify-center items-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-full bg-[#f8faf6] border border-[#be9953]/30 flex items-center justify-center text-[#be9953] mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-playfair text-xl font-bold text-[#182317] mb-2">Байршил</h3>
            <p className="text-lg font-semibold text-[#be9953] mb-1">
              Crystal Palace
            </p>
            <p className="text-sm text-[#2d392b] font-medium mb-4">
              Улаанбаатар хот
            </p>
            <a
              href="https://maps.google.com/?q=Crystal+Palace+Ulaanbaatar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 border border-[#be9953] text-[#be9953] hover:bg-[#be9953] hover:text-white px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300"
            >
              <span>Газрын зураг дээр үзэх</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
