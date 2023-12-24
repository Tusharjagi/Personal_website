import Image from "next/image";

import IconsStyled from "@/styles/Components/UtilsComponents/IconsStyled";

type IconsProps = {
  name: string;
  iconName?: string;
};

const Icons = ({ name, iconName }: IconsProps) => {
  return (
    <IconsStyled>
      <Image src={`assets/icons/${name}.svg`} alt={name} fill />
      <span>{iconName?.length ? iconName : name}</span>
    </IconsStyled>
  );
};

export default Icons;
