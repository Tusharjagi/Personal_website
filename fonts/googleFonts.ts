import { Hind, Nunito } from "next/font/google";

export const nunitoFont = Nunito({
  subsets: ["latin-ext"],
});

export const hind = Hind({
  weight: "500",
  subsets: ["devanagari"],
  preload: true,
});
