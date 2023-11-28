import { NavIconStyled } from "@/styles/Components/NavBar/NavIcon/NavIconStyled";

import useTextAnimation from "../../../hooks/useTypingEffect";

const NavIcon = (): JSX.Element => {
  const navIconText: string[] = ["REACT", "JAVASCRIPT", "HTML", "CSS"];

  const textEffect: string = useTextAnimation(navIconText, 400);

  return (
    <NavIconStyled>
      <span>{`{ `}</span>
      {textEffect}
      <span>{` }`}</span>
    </NavIconStyled>
  );
};

export default NavIcon;
