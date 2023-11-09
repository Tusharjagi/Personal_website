import React from "react";
import { Grid } from "@mui/joy";

import styles from "@/styles/components/Navbar/navbar.module.scss";

import CustomButton from "../common/CustomButton";

const Navbar = (): JSX.Element => {
  const handle = () => {
    console.log("Download Resume");
  };
  return (
    <Grid className={styles.navbar_wrapper}>
      <Grid>
        <CustomButton text="ICON" onClick={handle} />
      </Grid>
      <Grid>
        <CustomButton text="About" onClick={handle} />
        <CustomButton text="Projects" onClick={handle} />
        <CustomButton text="Resume" onClick={handle} />
      </Grid>
    </Grid>
  );
};

export default Navbar;
