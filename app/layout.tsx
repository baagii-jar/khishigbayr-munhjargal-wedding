import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Хуримын Урилга | Ж.Хишигбаяр & Б.Мөнхжаргал",
  description: "Хатан сүйхээр заяа зангидаж, Хаан бугуйвчаар жаргал нэгтгэж буй бидний хуримын ёслолын урилга. 2026.09.12 Crystal Palace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mn"
      className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="bg-[#f8faf6] text-[#1a2419] antialiased selection:bg-[#be9953] selection:text-white font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}
