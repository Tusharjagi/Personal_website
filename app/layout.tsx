import React from "react";
import type { Metadata } from "next";
import { Hind } from "next/font/google";
import "@/styles/globals.scss";

const poppins = Hind({
  weight: "500",
  subsets: ["devanagari"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Tushar",
  description: "Tushar portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
