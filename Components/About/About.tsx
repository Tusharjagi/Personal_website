"use client";

import { AboutStyled } from "@/styles/Components/About/AboutStyled";
import MovingLine from "../UtilsComponents/MovingLine";

import { nunitoFont } from "@/fonts/googleFonts";
import { textConsts } from "@/utils/textConst";

const About = () => {
  return (
    <AboutStyled className={`${nunitoFont.className}`}>
      <span>{`${textConsts.web} ${textConsts.developer}`}</span>
      <MovingLine margin="0 20% 0 20%" />
    </AboutStyled>
  );
};

export default About;
