"use client";
import React from "react";
import ParticlesComponent from "./ParticleComponent";
import TopBackGround from "./Top";
import BottomBackGround from "./Bottom";

const Background = (): JSX.Element => {
  return (
    <>
      <TopBackGround />
      <ParticlesComponent />
      <BottomBackGround />
    </>
  );
};

export default Background;
