import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Midhuna & Gautham | Engagement",
  description: "Engagement celebration of Midhuna & Gautham - December 23, 2026",
  openGraph: {
    images: [
      {
        url: "/MG_favicon.png",
        width: 800,
        height: 600,
        alt: "Midhuna & Gautham Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
