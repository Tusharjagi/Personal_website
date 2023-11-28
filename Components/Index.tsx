import React from "react";

import NavBar from "./NavBar/NavBar";
import TopBackground from "./TopBackground/TopBackground";
import About from "./About/About";

const Index = (): JSX.Element => {
  return (
    <>
      <TopBackground />
      <NavBar />
      <About />
    </>
  );
};

export default Index;
