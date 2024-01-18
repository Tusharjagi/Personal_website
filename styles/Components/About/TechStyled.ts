import { Grid, styled } from "@mui/joy";
import { diphylleia } from "@/fonts/googleFonts";

const TechStackStyled = styled(Grid)`
  margin-bottom: 2rem;
  .inner_tech_stack {
    padding: 20px;
  }
  .stack_name {
    position: absolute;
    left: 0;
    margin-left: 10%;
    font-size: 22px;
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
    padding: 0 2rem 0.5rem 8rem;
    font-family: ${diphylleia};
    color: var(--lightGray-color);
  }

  > h2:hover {
    color: var(--white-color);
    transform: scale(1.1);
    transform: translateX(-20%);
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
