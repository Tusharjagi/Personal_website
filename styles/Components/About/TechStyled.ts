import { Grid, styled } from "@mui/joy";
import { diphylleia } from "@/fonts/googleFonts";

const TechStackStyled = styled(Grid)`
  margin-bottom: 2rem;
  .inner_tech_stack {
    padding: 20px;
  }

  .stack_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.4rem;

    div {
      display: inline-flex;
      flex-wrap: wrap;
      gap: 2rem;
      padding: 10px;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }

  .stack_name {
    font-size: 24px;
    width: 60%;
    span {
      background-image: linear-gradient(to right, var(--cyan-color), var(--cyan-color) 50%, var(--lightGray-color) 50%);
      background-size: 200% 100%;
      background-position: -100%;
      display: inline-block;
      padding: 2px 5px;
      position: relative;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: all 0.3s ease-in-out;
      width: 100%;
    }

    span:before {
      content: "";
      background: var(--cyan-color);
      display: block;
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 0;
      height: 3px;
      transition: all 300ms ease-in-out;
    }

    span:hover {
      background-position: 0;
      transform: scale(1.1);
      width: 100%;
    }

    span:hover::before {
      width: 100%;
    }
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
