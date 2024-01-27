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
          <Grid className="stack_wrapper">
            <Grid className="stack_name">
              <span>{languages}</span>
            </Grid>
            <Grid>
              <Icons name="javascript" iconName="js" />
              <Icons name="typescript" iconName="ts" />
              <Icons name="html" />
              <Icons name="css" />
              <Icons name="sass" />
              <Icons name="cpp" />
              <Icons name="python" />
              <Icons name="dart" />
            </Grid>
          </Grid>

          <Grid className="stack_wrapper">
            <Grid className="stack_name">
              <span>{`${frameworks} ${andSign} ${library}`}</span>
            </Grid>
            <Grid>
              <Icons name="react" />
              <Icons name="angular" />
              <Icons name="express" />
              <Icons name="node" />
              <Icons name="mongodb" />
              <Icons name="jest" />
              <Icons name="django" />
              <Icons name="flutter" />
            </Grid>
          </Grid>

          <Grid className="stack_wrapper">
            <Grid className="stack_name">
              <span>{`${version} ${control} ${andSign} ${platforms}`}</span>
            </Grid>
            <Grid>
              <Icons name="git" />
              <Icons name="github" />
              <Icons name="gitlab" />
              <Icons name="docker" />
              <Icons name="jenkins" />
            </Grid>
          </Grid>

          <Grid className="stack_wrapper">
            <Grid className="stack_name">
              <span>{`${IDE} ${tools}`}</span>
            </Grid>
            <Grid>
              <Icons name="vs-code" iconName="vscode" />
              <Icons name="intellij" />
              <Icons name="postman" />
            </Grid>
          </Grid>
        </Grid>
      </GlassSlab>
    </TechStackStyled>
  );
};

export default TechStack;
