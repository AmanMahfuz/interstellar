import type { Metadata } from "next";
import { Orbitron, Manrope } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AWEGA25 — Interstellar Design System",
  description: "A modern, clean, interstellar-themed design system for AWEGA25.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${manrope.variable} antialiased bg-[var(--bg)] text-white font-body`}
      >
        {children}
      </body>
    </html>
  );
}
