import React from "react";
import Image from "next/image";
import styles from "@/styles/components/Background/bottom.module.scss";

const BottomBackGround = (): JSX.Element => {
  return (
    <div className={styles.bottom_background_wrapper}>
      <Image src="/assets/gradientBackGround.png" alt="img" fill />
    </div>
  );
};

export default BottomBackGround;
