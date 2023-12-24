import { Grid, styled } from "@mui/joy";

const IconsStyled = styled(Grid)`
  display: flex;
  justify-content: center;
  position: relative;
  width: 50px;
  height: 50px;
  margin-bottom: 22px;

  & span {
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    text-transform: uppercase;
  }

  :hover {
    transform: scale(1.2);
    transition: transform 300ms ease-in;
    color: var(--white-color);
  }
  :not(:hover) {
    transition: all 300ms ease-out;
  }
`;

export default IconsStyled;
