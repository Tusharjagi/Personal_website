import { MenuStyled } from "@/styles/Components/NavBar/MenuComponent/MenuStyled";

import CustomButton from "@/components/CustomButton/CustomButton";

const MenuComponent = (): JSX.Element => {
  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section !== null) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Section not found");
    }
  };

  const handleResume = (): void => {
    window.location.href = "https://docs.google.com/document/d/1Zg1IMAaSdAzbDwA_hOK5Xf76fQ7gjk-xhmUzQOc2HdY";
  };

  return (
    <MenuStyled>
      <CustomButton
        text="TECH STACK"
        onClick={() => {
          scrollToSection("stack");
        }}
      />

      <CustomButton
        text="CARRIER"
        onClick={() => {
          scrollToSection("carrier");
        }}
      />

      <CustomButton
        text="CERTIFICATES"
        onClick={() => {
          scrollToSection("certificate");
        }}
      />

      <CustomButton
        text="PROJECT"
        onClick={() => {
          scrollToSection("project");
        }}
      />

      <CustomButton text="RESUME" onClick={handleResume} />

      <CustomButton
        style={{ padding: "0 20px" }}
        icon="github.svg"
        onClick={() => {
          scrollToSection("contact");
        }}
      />
    </MenuStyled>
  );
};

export default MenuComponent;
