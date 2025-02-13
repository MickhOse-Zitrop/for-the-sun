import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import React from "react";
import { Toaster } from "sonner";

const nunito = Nunito({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Для Солнышка",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${nunito.variable} antialiased scroll-smooth`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
