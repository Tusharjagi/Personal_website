import { FooterStyled } from "@/styles/Components/Footer/FooterStyled";
import MovingLine from "../UtilsComponents/MovingLine";
import style from "@/styles/Components/Footer/bottomBackGround.module.scss";

import { textConsts } from "@/utils/textConst";
import { isMobileDevice } from "@/utils/common";

const isMobile = isMobileDevice();

const { atSign, copyright, by, tushar } = textConsts;

const Footer = () => {
  return (
    <>
      <MovingLine margin={isMobile ? "0 6%" : "0 4%"} />
      <div className={style.bottom_background}>
        <FooterStyled>
          <div className="copyright">{`${atSign} ${copyright} ${by} ${tushar}`}</div>
        </FooterStyled>
      </div>
    </>
  );
};

export default Footer;
