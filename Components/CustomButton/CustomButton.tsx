import React from "react";

import styles from "@/styles/Components/CustomButton/CustomButton.module.scss";
import Image from "next/image";

interface customButtonProps {
  text?: string;
  onClick: () => void;
  icon?: string;
  style?: React.CSSProperties;
}

const CustomButton = ({ text, onClick, icon, style }: customButtonProps): JSX.Element => {
  return (
    <button onClick={onClick} className={styles.button} style={style}>
      {icon !== undefined ? <Image src={`/assets/icons/${icon}`} width={30} height={30} alt={`${icon}`}></Image> : text}
      <span />
    </button>
  );
};

export default CustomButton;
