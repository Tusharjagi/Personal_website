import { Hind, Nunito, Diphylleia } from "next/font/google";

export const nunitoFont = Nunito({
  subsets: ["latin-ext"],
});

export const hind = Hind({
  weight: "500",
  subsets: ["devanagari"],
  preload: true,
});

export const diphylleia = Diphylleia({
  weight: "400",
  subsets: ["latin"],
});
