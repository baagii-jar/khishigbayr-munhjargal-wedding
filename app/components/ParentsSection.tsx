"use client";

export default function ParentsSection() {
  return (
    <section className="py-14 px-4 bg-[#f1f4ef]/60">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-[#be9953] font-semibold mb-2">
          Аав, Ээжийн Дээд Таалал
        </p>
        <h2 className="font-cormorant text-3xl sm:text-5xl text-[#182317] font-bold mb-3">
          Хүндэтгэсэн эцэг эх
        </h2>
        <div className="botanical-divider w-24 mx-auto my-4"></div>

        {/* 2 Parents Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Groom's Parents Card */}
          <div className="bg-white p-8 rounded-2xl border border-[#be9953]/30 shadow-md relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 gold-gradient-bg"></div>
            <h3 className="font-cormorant text-2xl font-bold text-[#be9953] mb-3">
              Хүүгийн эцэг эх
            </h3>
            <div className="space-y-1.5 text-[#182317] font-cormorant text-xl font-semibold">
              <p>Б.Жаргалсайхан</p>
              <p>П.Оюунцэцэг</p>
            </div>
          </div>

          {/* Bride's Parents Card */}
          <div className="bg-white p-8 rounded-2xl border border-[#be9953]/30 shadow-md relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 gold-gradient-bg"></div>
            <h3 className="font-cormorant text-2xl font-bold text-[#be9953] mb-3">
              Охины эцэг эх
            </h3>
            <div className="space-y-1.5 text-[#182317] font-cormorant text-xl font-semibold">
              <p>Х.Батхүү</p>
              <p>Ш.Оролмаа</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
