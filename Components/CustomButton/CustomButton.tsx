import React from "react";

import styles from "@/styles/Components/CustomButton/CustomButton.module.scss";

type customButtonProps = {
  text: string;
  onClick: () => void;
};

const CustomButton = ({ text, onClick }: customButtonProps): JSX.Element => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
      <span />
    </button>
  );
};

export default CustomButton;
