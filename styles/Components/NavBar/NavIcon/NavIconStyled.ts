import { Grid, styled } from "@mui/joy";

export const NavIconStyled = styled(Grid)`
  font-size: 22px;
  color: var(--lightGray-color);
  cursor: pointer;

  & span {
    font-size: 26px;
    color: white;
  }

  &:hover {
    color: var(--white-color);
    transition: all 600ms;
  }

  &:not(:hover) {
    transition: all 600ms;
  }
`;
