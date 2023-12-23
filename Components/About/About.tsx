import { HeadingStyled } from "@/styles/Components/About/HeadingStyled";
import MovingLine from "../UtilsComponents/MovingLine";
import Description from "./Description";

import { nunitoFont } from "@/fonts/googleFonts";
import { textConsts } from "@/utils/textConst";

const About = () => {
  return (
    <div>
      <HeadingStyled className={`${nunitoFont.className}`}>
        <span>{`${textConsts.web} ${textConsts.developer}`}</span>
        <MovingLine margin="0 20% 0 20%" />
      </HeadingStyled>
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
      <Description />
    </div>
  );
};

export default About;
