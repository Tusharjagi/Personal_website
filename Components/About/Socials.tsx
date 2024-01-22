import SocialStyled from "@/styles/Components/About/SocialStyled";
import GlassSlab from "../UtilsComponents/GlassSlab";
import { Grid } from "@mui/joy";
import { textConsts } from "@/utils/textConst";
import Icons from "../UtilsComponents/Icons";

const Socials = (): JSX.Element => {
  const { Socials } = textConsts;

  return (
    <SocialStyled>
      <h2>{Socials}</h2>
      <GlassSlab width={80}>
        <Grid className="social_icons">
          <a href="https://www.linkedin.com/in/tushar-jagi-519025215" target="_blank" rel="noopener noreferrer">
            <Icons name="linkedin" />
          </a>
          <a href="https://github.com/Tusharjagi" target="_blank" rel="noopener noreferrer">
            <Icons name="github" />
          </a>
          <a href="mailto:tusharjagi@gmail.com" target="_blank" rel="noopener noreferrer">
            <Icons name="gmail" />
          </a>
          <a href="https://medium.com/@tusharjagi" target="_blank" rel="noopener noreferrer">
            <Icons name="medium" />
          </a>
          <a href="https://tusharjagi.hashnode.dev" target="_blank" rel="noopener noreferrer">
            <Icons name="hashNode" />
          </a>
        </Grid>
      </GlassSlab>
    </SocialStyled>
  );
};

export default Socials;
