import SocialStyled from "@/styles/Components/About/SocialStyled";
import GlassSlab from "../UtilsComponents/GlassSlab";
import { Grid } from "@mui/joy";
import { textConsts } from "@/utils/textConst";

const Socials = (): JSX.Element => {
  const { Socials } = textConsts;

  return (
    <SocialStyled>
      <h2>{Socials}</h2>
      <GlassSlab width={80}>
        <Grid>Socials links</Grid>
      </GlassSlab>
    </SocialStyled>
  );
};

export default Socials;
