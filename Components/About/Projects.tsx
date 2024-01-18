import ProjectsStyled from "@/styles/Components/About/ProjectStyled";
import GlassSlab from "../UtilsComponents/GlassSlab";
import Grid from "@mui/joy/Grid";
import { textConsts } from "@/utils/textConst";

const Projects = (): JSX.Element => {
  return (
    <ProjectsStyled>
      <h2>{textConsts.projects}</h2>
      <GlassSlab width={80}>
        <Grid>Django chat social app</Grid>
      </GlassSlab>
    </ProjectsStyled>
  );
};

export default Projects;
