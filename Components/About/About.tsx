import AboutStyled from "@/styles/Components/About/AboutStyled";
import HeadingStyled from "@/styles/Components/About/HeadingStyled";
import MovingLine from "../UtilsComponents/MovingLine";
import Description from "./Description";

import { nunitoFont } from "@/fonts/googleFonts";
import { textConsts } from "@/utils/textConst";

import { isMobileDevice } from "@/utils/common";
import TechStack from "./TechStack";

const isMobile = isMobileDevice();

const About = (): JSX.Element => {
  return (
    <AboutStyled>
      <HeadingStyled isMobile={isMobile} className={`${nunitoFont.className}`}>
        <span>{`${textConsts.web} ${textConsts.developer}`}</span>
        <MovingLine margin="0 20% 0 20%" />
        <span style={{ marginBottom: "1rem" }} />
      </HeadingStyled>
      <Description />
      <TechStack />
    </AboutStyled>
  );
};

export default About;
