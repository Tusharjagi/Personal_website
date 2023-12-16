import { Grid, GridProps, styled } from "@mui/joy";

import { moveLeftToRight } from "../Animations/moveLeftToRight";

interface MovingLineStyledProps extends GridProps {
  margin?: string;
  width?: string;
  height?: string;
}

export const MovingLineStyled = styled(Grid)<MovingLineStyledProps>`
  margin: ${({ margin }) => margin || "0 10% 0 10%"};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: ${({ width }) => width || "40px"};
    height: ${({ height }) => height || "1px"};
    background: linear-gradient(90deg, var(--dark-blue-color) 1%, var(--cyan-color) 50%, var(--dark-blue-color) 97%);
    transform: translateX(-50%);
    animation: ${moveLeftToRight} 20s linear infinite;
  }
`;
