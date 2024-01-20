import { Grid, styled } from "@mui/joy";
import { diphylleia } from "@/fonts/googleFonts";

const SocialStyled = styled(Grid)`
  margin-bottom: 2rem;

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
`;

export default SocialStyled;
