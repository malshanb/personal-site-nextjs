// Namo Buddaya

import "./globals.css";
import { Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Malshan Bandara",
  description: "Personal site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geistMono.variable}>{children}</body>
    </html>
  );
}

// Namo Buddaya
