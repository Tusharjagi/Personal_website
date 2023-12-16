"use client";

import { HeadingStyled } from "@/styles/Components/About/AboutStyled";
import MovingLine from "../UtilsComponents/MovingLine";

import { nunitoFont } from "@/fonts/googleFonts";
import { textConsts } from "@/utils/textConst";

const About = () => {
  return (
    <div>
      <HeadingStyled className={`${nunitoFont.className}`}>
        <span>{`${textConsts.web} ${textConsts.developer}`}</span>
        <MovingLine margin="0 20% 0 20%" />
      </HeadingStyled>
    </div>
  );
};

export default About;
