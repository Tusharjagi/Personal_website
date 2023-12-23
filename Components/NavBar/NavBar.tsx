import React from "react";

import { NavbarStyled } from "@/styles/Components/NavBar/NavBarStyled";

import MenuComponent from "./MenuComponent/MenuComponent";
import NavIcon from "./NavIcon/NavIcon";

import { isMobileDevice } from "@/utils/common";

const isMobile = isMobileDevice();

const NavBar = (): JSX.Element => {
  return (
    <div>
      {isMobile ? (
        <div>Mobile </div>
      ) : (
        <NavbarStyled>
          <NavIcon />
          <MenuComponent />
        </NavbarStyled>
      )}
    </div>
  );
};

export default NavBar;
