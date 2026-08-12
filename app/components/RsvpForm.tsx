"use client";

import { useState } from "react";

export default function RsvpForm() {
  const [formData, setFormData] = useState({
    name: "",
    attending: "yes",
    guestCount: "1",
    phone: "",
    wishes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="py-16 px-4 max-w-3xl mx-auto">
      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#be9953]/30 gold-glow shadow-xl">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#be9953] font-semibold mb-2">
            Хүрэлцэн ирэх бүртгэл
          </p>
          <h2 className="font-cormorant text-3xl sm:text-4xl text-[#182317] font-bold">
            RSVP
          </h2>
          <div className="botanical-divider w-20 mx-auto my-3"></div>
          <p className="text-sm text-[#2d392b] max-w-md mx-auto">
            Та хуримын ёслолд хүрэлцэн ирэх эсэхээ 9 сарын 1-ний дотор мэдэгдэнэ үү.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#f8faf6] border border-[#be9953]/40 p-8 rounded-2xl text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 bg-[#be9953]/10 text-[#be9953] rounded-full flex items-center justify-center mx-auto text-3xl">
              ✨
            </div>
            <h3 className="font-playfair text-2xl font-bold text-[#182317]">
              Баярлалаа!
            </h3>
            <p className="text-sm text-[#2d392b]">
              Таны хүсэлтийг амжилттай хүлээн авлаа. Бид таныг хуримын ёслол дээрээ баяртайгаар угтан авах болно!
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-xs text-[#be9953] underline uppercase tracking-wider font-semibold"
            >
              Дахин бөглөх
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Guest Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#182317] mb-2">
                Зочны нэр *
              </label>
              <input
                type="text"
                required
                placeholder="Таны бүтэн нэр"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#be9953]/30 bg-[#f8faf6] text-[#182317] focus:outline-none focus:ring-2 focus:ring-[#be9953] transition-all"
              />
            </div>

            {/* Attendance Choice */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#182317] mb-2">
                Хуриманд хүрэлцэн ирэх эсэх *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attending: "yes" })}
                  className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${
                    formData.attending === "yes"
                      ? "bg-[#be9953] text-white border-[#be9953] shadow-md"
                      : "bg-[#f8faf6] text-[#182317] border-[#be9953]/30 hover:border-[#be9953]"
                  }`}
                >
                  Бүрэн боломжтой (Ирнэ)
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attending: "no" })}
                  className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${
                    formData.attending === "no"
                      ? "bg-[#182317] text-white border-[#182317] shadow-md"
                      : "bg-[#f8faf6] text-[#182317] border-[#be9953]/30 hover:border-[#be9953]"
                  }`}
                >
                  Амжихгүй
                </button>
              </div>
            </div>

            {/* Guest Count */}
            {formData.attending === "yes" && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#182317] mb-2">
                  Хэдэн хүний бүрэлдэхүүнтэй ирэх вэ?
                </label>
                <select
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#be9953]/30 bg-[#f8faf6] text-[#182317] focus:outline-none focus:ring-2 focus:ring-[#be9953] transition-all"
                >
                  <option value="1">1 хүн</option>
                  <option value="2">2 хүн</option>
                  <option value="3">3 хүн</option>
                  <option value="4+">4 буюу түүнээс дээш</option>
                </select>
              </div>
            )}

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#182317] mb-2">
                Утасны дугаар
              </label>
              <input
                type="tel"
                placeholder="8811-xxxx"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#be9953]/30 bg-[#f8faf6] text-[#182317] focus:outline-none focus:ring-2 focus:ring-[#be9953] transition-all"
              />
            </div>

            {/* Congratulations Message */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#182317] mb-2">
                Мэндчилгээ, ерөөлийн үг
              </label>
              <textarea
                rows={3}
                placeholder="Залуу хосуудадаа зориулсан ерөөл..."
                value={formData.wishes}
                onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#be9953]/30 bg-[#f8faf6] text-[#182317] focus:outline-none focus:ring-2 focus:ring-[#be9953] transition-all"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl gold-gradient-bg text-white font-bold text-sm uppercase tracking-widest shadow-lg hover:opacity-90 transition-opacity"
            >
              Илгээх
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
