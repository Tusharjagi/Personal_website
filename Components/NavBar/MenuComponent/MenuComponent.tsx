import { MenuStyled } from "@/styles/Components/NavBar/MenuComponent/MenuStyled";

import CustomButton from "@/components/CustomButton/CustomButton";

const MenuComponent = (): JSX.Element => {
  const handleHome = () => {
    console.log("HOME");
  };

  return (
    <MenuStyled>
      <CustomButton text="HOME" onClick={handleHome} />
      <CustomButton text="ABOUT" onClick={handleHome} />
      <CustomButton text="PROJECT" onClick={handleHome} />
      <CustomButton text="CONTACT" onClick={handleHome} />
    </MenuStyled>
  );
};

export default MenuComponent;
