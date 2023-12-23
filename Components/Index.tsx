"use client";

import React from "react";

import NavBar from "./NavBar/NavBar";
import TopBackground from "./Background/TopBackGround";
import About from "./About/About";
import BottomBackGround from "./Background/BottomBackGround";
import Footer from "./Footer/Footer";

const Index = (): JSX.Element => {
  return (
    <>
      <TopBackground />
      <NavBar />
      <About />
      <Footer />
    </>
  );
};

export default Index;
