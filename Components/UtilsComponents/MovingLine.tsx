import React from "react";

import { MovingLineStyled } from "@/styles/Components/UtilsComponents/MovingLineStyled";

type MovingLineProps = {
  margin?: string;
  width?: string;
  height?: string;
};

const MovingLine = ({ margin, width, height }: MovingLineProps): JSX.Element => {
  return <MovingLineStyled margin={margin} width={width} height={height} />;
};

export default MovingLine;
