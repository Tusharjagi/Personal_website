import { Grid, styled } from "@mui/joy";
import { diphylleia } from "@/fonts/googleFonts";

const ProjectsStyled = styled(Grid)`
  margin-bottom: 2rem;

  .project_wrapper {
    padding: 1rem;
    display: flex;
    gap: 2rem;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .project {
    font-size: 20px;
    max-width: 200px;

    span:hover {
      font-size: 1.2rem;
      transition: all 300ms ease-in-out;
      color: var(--white-color);
    }

    span:not(:hover) {
      transition: all 300ms ease-in-out;
    }

    .links {
      display: flex;
      justify-content: center;
      gap: 1rem;

      img:hover {
        transform: scale(1.2);
        transition: all 300ms ease-in-out;
        cursor: pointer;
      }

      img:not(:hover) {
        transition: all 300ms ease-in-out;
      }
    }
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

export default ProjectsStyled;
