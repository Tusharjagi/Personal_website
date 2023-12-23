import React from "react";

import { NavbarStyled } from "@/styles/Components/NavBar/NavBarStyled";

import MenuComponent from "./MenuComponent/MenuComponent";
import NavIcon from "./NavIcon/NavIcon";

const NavBar = (): JSX.Element => {
  return (
    <NavbarStyled>
      <NavIcon />
      <MenuComponent />
    </NavbarStyled>
  );
};

export default NavBar;
