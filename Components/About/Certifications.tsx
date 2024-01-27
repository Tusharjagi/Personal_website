import CertificationStyled from "@/styles/Components/About/CertificationStyled";
import { textConsts } from "@/utils/textConst";
import GlassSlab from "../UtilsComponents/GlassSlab";
import Grid from "@mui/joy/Grid";
import Image from "next/image";

const Certifications = (): JSX.Element => {
  const { certifications, meta, front, end, developer, angular, nodeJs, python, cpp, sapAbap } = textConsts;

  return (
    <CertificationStyled id="certificate">
      <h2>{certifications}</h2>
      <GlassSlab width={80}>
        <Grid className="certificate_wrapper">
          <Grid>
            <a
              href="https://www.coursera.org/account/accomplishments/specialization/certificate/G3WZZRD3MA2W"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="certificates">
                <Image
                  src="/assets/previews/meta_frontend_developer.png"
                  width={200}
                  height={150}
                  alt={`${meta}_${front}_${end}_${developer}`}
                />
                <div>
                  <span>{`${meta} ${front} ${end} ${developer}`}</span>
                </div>
              </div>
            </a>
          </Grid>

          <Grid>
            <a href="/assets/pdf/angular.pdf" target="_blank" rel="noopener noreferrer">
              <div className="certificates">
                <Image src="/assets/previews/angular.png" width={200} height={150} alt={`${angular}`} />
                <div>
                  <span>{angular}</span>
                </div>
              </div>
            </a>
          </Grid>

          <Grid>
            <a href="/assets/pdf/node_js_course.pdf" target="_blank" rel="noopener noreferrer">
              <div className="certificates">
                <Image src="/assets/previews/node.png" width={200} height={150} alt={`${nodeJs}`} />
                <div>
                  <span>{nodeJs}</span>
                </div>
              </div>
            </a>
          </Grid>

          <Grid>
            <a
              href="https://www.udemy.com/certificate/UC-fa699917-f583-4d1c-8d1c-dcf5188cc2f2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="certificates">
                <Image src="/assets/previews/python.png" width={200} height={150} alt={`${python}`} />
                <div>
                  <span>{python}</span>
                </div>
              </div>
            </a>
          </Grid>

          <Grid>
            <a
              href="https://www.udemy.com/certificate/UC-1b286d1a-eaa4-419a-adf7-b2c5041fb5b2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="certificates">
                <Image src="/assets/previews/cpp.png" width={200} height={150} alt={`${cpp}`} />
                <div>
                  <span>{cpp}</span>
                </div>
              </div>
            </a>
          </Grid>

          <Grid>
            <a href="/assets/pdf/sapAbap.pdf" target="_blank" rel="noopener noreferrer">
              <div className="certificates">
                <Image src="/assets/previews/sap.png" width={200} height={150} alt={`${sapAbap}`} />
                <div>
                  <span>{sapAbap}</span>
                </div>
              </div>
            </a>
          </Grid>
        </Grid>
      </GlassSlab>
    </CertificationStyled>
  );
};

export default Certifications;
