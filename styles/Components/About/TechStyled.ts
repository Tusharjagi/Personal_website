import { Grid, styled } from "@mui/joy";
import { diphylleia } from "@/fonts/googleFonts";

const TechStackStyled = styled(Grid)`
  margin-bottom: 2rem;
  .stack_name {
    position: absolute;
    left: 0;
    margin-left: 10%;
  }

  .stack_name:hover {
    color: var(--white-color);
    transform: scale(1.3);
    transition: all 300ms ease-in-out;
  }

  .stack_name:not(:hover) {
    transition: all 300ms ease-in-out;
  }

  > h2 {
    display: inline-flex;
    padding-left: 8rem;
    padding-bottom: 0.5rem;
    font-family: ${diphylleia};
    color: var(--lightGray-color);
  }

  > h2:hover {
    color: var(--white-color);
    transform: scale(1.1);
    transition: all 300ms ease-in-out;
  }

  > h2:not(:hover) {
    transition: all 300ms ease-in-out;
  }

  > div > div {
    justify-content: center;
  }
`;

export default TechStackStyled;
