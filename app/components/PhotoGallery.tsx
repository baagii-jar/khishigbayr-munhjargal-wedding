"use client";

import { useState } from "react";
import Image from "next/image";

export default function PhotoGallery() {
  const photos = [
    {
      src: "/18cqNZpC.jpg",
      alt: "Ж.Хишигбаяр & Б.Мөнхжаргал",
      title: "Дурсамж 1",
    },
    {
      src: "/DRrSu6N3.jpg",
      alt: "Ж.Хишигбаяр & Б.Мөнхжаргал",
      title: "Дурсамж 2",
    },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-[#be9953] font-semibold mb-2">
          Бидний нандин агшин
        </p>
        <h2 className="font-cormorant text-3xl sm:text-5xl text-[#182317] font-bold">
          Зургийн цомог
        </h2>
        <div className="botanical-divider w-24 mx-auto my-4"></div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {photos.map((photo, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(photo.src)}
            className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border-2 border-[#be9953]/20 cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#be9953]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
              <span className="text-white font-playfair text-lg tracking-wider border border-white/40 px-4 py-1.5 rounded-full backdrop-blur-sm">
                Томруулах 🔍
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer animate-fade-in"
        >
          <div className="relative max-w-4xl w-full h-[80vh] rounded-2xl overflow-hidden border border-[#be9953]/50">
            <Image
              src={selectedImage}
              alt="Wedding preview"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 text-xl w-10 h-10 flex items-center justify-center transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
