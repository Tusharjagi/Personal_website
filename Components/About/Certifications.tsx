import CertificationStyled from "@/styles/Components/About/CertificationStyled";
import { textConsts } from "@/utils/textConst";
import GlassSlab from "../UtilsComponents/GlassSlab";
import { Grid } from "@mui/joy";

const Certifications = (): JSX.Element => {
  return (
    <CertificationStyled>
      <h2>{textConsts.certifications}</h2>
      <GlassSlab width={80}>
        <Grid>
          <Grid>Meta front End Developer</Grid>
        </Grid>
      </GlassSlab>
    </CertificationStyled>
  );
};

export default Certifications;
