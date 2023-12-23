import React from "react";

import GlassSlab from "../UtilsComponents/GlassSlab";
import { DescriptionStyled } from "@/styles/Components/About/DescriptionStyled";

const Description = () => {
  const text =
    "Hey there! 👋 I'm Tushar, a passionate Software Engineer dedicated to crafting immersive digital experiences. Beginning my journey as a Frontend Developer, I've embarked on a mission to leave a positive imprint on the ever-evolving landscape of web development.";

  const text2 =
    "My commitment to driving positive change is not just a mission but a passion that has translated into tangible benefits for the projects I undertake. Whether it's breathing life into frontends or backend with React and Next.js or architecting robust server-side applications with Node.js, Express, and MongoDB, I bring a versatile and dynamic skill set to the forefront.";

  const text3 =
    "This website is my canvas, showcasing my journey, achievements, and the projects that have defined my career. Join me as I continue to explore new horizons in the ever-evolving world of Web Development.";

  const text4 = "Let's collaboratively shape the future through code!";
  return (
    <DescriptionStyled>
      <GlassSlab width={100}>
        <div>{text}</div>
        <br />
        <div>{text2}</div>
        <br />
        <div>{text3}</div>
        <br />
        <div>{text4}</div>
      </GlassSlab>
    </DescriptionStyled>
  );
};

export default Description;
