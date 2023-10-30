import React from "react";
import Image from "next/image";
import styles from "@/styles/components/Background/top.module.scss";

const TopBackGround = (): JSX.Element => {
  return (
    <div className={styles.top_background_wrapper}>
      <Image src={"/assets/squareGrids.svg"} alt="square_grids" fill />
    </div>
  );
};

export default TopBackGround;
