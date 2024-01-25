import { Grid } from "@mui/joy";
import TechStackStyled from "@/styles/Components/About/TechStyled";
import GlassSlab from "../UtilsComponents/GlassSlab";
import Icons from "../UtilsComponents/Icons";

import { textConsts } from "@/utils/textConst";

const { tech, stacks, languages, frameworks, andSign, library, version, control, platforms, IDE, tools } = textConsts;

const TechStack = (): JSX.Element => {
  return (
    <TechStackStyled>
      <h2>
        {tech}
        {stacks}
      </h2>

      <GlassSlab width={80}>
        <Grid className="inner_tech_stack">
          <Grid className="stack_name">{languages}</Grid>
          <Grid display="flex" gap="2rem" marginBottom="2rem" justifyContent="center">
            <Icons name="javascript" iconName="js" />
            <Icons name="typescript" iconName="ts" />
            <Icons name="html" />
            <Icons name="css" />
            <Icons name="sass" />
            <Icons name="cpp" />
            <Icons name="dart" />
          </Grid>
          <Grid className="stack_name">{`${frameworks} ${andSign} ${library}`}</Grid>
          <Grid display="flex" gap="2rem" marginBottom="2rem" justifyContent="center">
            <Icons name="react" />
            <Icons name="angular" />
            <Icons name="express" />
            <Icons name="node" />
            <Icons name="mongodb" />
            <Icons name="jest" />
            <Icons name="flutter" />
          </Grid>
          <Grid className="stack_name">{`${version} ${control} ${andSign} ${platforms}`}</Grid>
          <Grid display="flex" gap="2rem" marginBottom="2rem" justifyContent="center">
            <Icons name="git" />
            <Icons name="github" />
            <Icons name="gitlab" />
            <Icons name="docker" />
            <Icons name="jenkins" />
          </Grid>
          <Grid className="stack_name">{`${IDE} ${tools}`}</Grid>
          <Grid display="flex" gap="2rem" justifyContent="center">
            <Icons name="vs-code" iconName="vscode" />
            <Icons name="intellij" />
            <Icons name="postman" />
          </Grid>
        </Grid>
      </GlassSlab>
    </TechStackStyled>
  );
};

export default TechStack;
