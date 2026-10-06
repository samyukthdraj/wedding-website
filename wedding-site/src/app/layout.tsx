import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Midhuna & Gautham - Engagement",
  description: "A celebration of love - Midhuna & Gautham's Engagement",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
