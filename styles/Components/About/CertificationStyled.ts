import { Grid, styled } from "@mui/joy";
import { diphylleia } from "@/fonts/googleFonts";

const CertificationStyled = styled(Grid)`
  margin-bottom: 2rem;

  .certificate_wrapper {
    padding: 1rem;
    display: flex;
    gap: 2rem;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .certificates {
    font-size: 20px;
    max-width: 200px;
  }

  .certificates:hover {
    transform: scale(1.1);
    padding: 0.6rem;
    color: var(--white-color);
    transition: all 300ms ease-in-out;
    font-size: 1.2rem;
  }

  .certificates:not(:hover) {
    transition: all 300ms ease-in-out;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
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
`;

export default CertificationStyled;
