import React from "react";
import type { Metadata } from "next";
import "@/styles/globals.scss";
import { hind } from "@/fonts/googleFonts";
import { textConsts } from "@/utils/textConst";

export const metadata: Metadata = {
  title: `${textConsts.tushar}`,
  description: `${textConsts.tushar} ${textConsts.portfolio} ${textConsts.website}`,
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" className={hind.className}>
      <body>{children}</body>
    </html>
  );
}
