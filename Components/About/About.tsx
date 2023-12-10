"use client";

import { AboutStyled } from "@/styles/Components/About/AboutStyled";
import { nunitoFont } from "@/fonts/googleFonts";
import { textConsts } from "@/utils/textConst";

const About = () => {
  return <AboutStyled className={`${nunitoFont.className}`}>{`${textConsts.web} ${textConsts.developer}`}</AboutStyled>;
};

export default About;
