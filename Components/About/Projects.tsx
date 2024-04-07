import ProjectsStyled from "@/styles/Components/About/ProjectStyled";
import GlassSlab from "../UtilsComponents/GlassSlab";
import Grid from "@mui/joy/Grid";
import { textConsts } from "@/utils/textConst";
import Image from "next/image";

const Projects = (): JSX.Element => {
  const { projects, previous, portfolio, github, world, time, clock, traveling, website, kanban, task, management } =
    textConsts;

  return (
    <ProjectsStyled id="project">
      <h2>{projects}</h2>
      <GlassSlab width={80}>
        <Grid className="project_wrapper">
          <Grid className="project">
            <a href="https://kan-ban-task-dashboard.vercel.app" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/previews/kanban.png" width={200} height={150} alt={`${traveling}_${website}`} />
            </a>
            <Grid className="links">
              <a href="https://kan-ban-task-dashboard.vercel.app" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/icons/globe.svg" width={35} height={35} alt={`${portfolio}`} />
              </a>
              <a href="https://github.com/Tusharjagi/KanBan-Task-Dashboard" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/icons/github.svg" width={35} height={35} alt={`${traveling}_${website}`} />
              </a>
            </Grid>
            <div>
              <span>{`${kanban} ${task} ${management}`}</span>
            </div>
          </Grid>

          <Grid className="project">
            <a href="https://tusharjagi.github.io" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/previews/previous_portfolio.png" width={200} height={150} alt={`${portfolio}`} />
            </a>
            <Grid className="links">
              <a href="https://tusharjagi.github.io" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/icons/globe.svg" width={35} height={35} alt={`${portfolio}`} />
              </a>
              <a href="https://github.com/Tusharjagi/TusharJagi.github.io" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/icons/github.svg" width={35} height={35} alt={`${github}`} />
              </a>
            </Grid>
            <div>
              <span>{`${previous} ${portfolio}`}</span>
            </div>
          </Grid>

          <Grid className="project">
            <a href="https://github.com/Tusharjagi/Flutter_World_Time" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/previews/world_clock.png" width={200} height={150} alt={`${world}_${time}`} />
            </a>
            <Grid className="links">
              <a href="https://github.com/Tusharjagi/Flutter_World_Time" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/icons/github.svg" width={35} height={35} alt={`${world}_${time}`} />
              </a>
            </Grid>
            <div>
              <span>{`${world} ${time} ${clock}`}</span>
            </div>
          </Grid>

          <Grid className="project">
            <a href="https://github.com/Tusharjagi/Django_Project" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/icons/django.svg" width={200} height={150} alt={`${traveling}_${website}`} />
            </a>
            <Grid className="links">
              <a href="https://github.com/Tusharjagi/Django_Project" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/icons/github.svg" width={35} height={35} alt={`${traveling}_${website}`} />
              </a>
            </Grid>
            <div>
              <span>{`${traveling} ${website}`}</span>
            </div>
          </Grid>
        </Grid>
      </GlassSlab>
    </ProjectsStyled>
  );
};

export default Projects;
