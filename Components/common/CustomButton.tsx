import React from "react";
import styles from "@/styles/components/common/customButton.module.scss";

interface CustomButtonProps {
  text: string;
  onClick: () => void;
}

const CustomButton = ({ text, onClick }: CustomButtonProps): JSX.Element => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
