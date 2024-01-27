import CarrierStyled from "@/styles/Components/About/CarrierStyles";
import { textConsts, years } from "@/utils/textConst";
import GlassSlab from "../UtilsComponents/GlassSlab";
import Grid from "@mui/joy/Grid";
import React, { useState } from "react";
import Image from "next/image";

const Carrier = (): JSX.Element => {
  const { Education, Experience, Senior, Secondary, graduation } = textConsts;

  interface SectionToggleProps {
    title: string;
    children: React.ReactNode;
    icon?: string;
  }

  const SectionToggle: React.FC<SectionToggleProps> = ({ title, children, icon = "" }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSection = (): void => {
      setIsExpanded(!isExpanded);
    };

    return (
      <div style={{ paddingTop: "10px" }}>
        <button onClick={toggleSection} className="toggle_button">
          <div>
            <span className={isExpanded ? "down_icon_image" : "icon_image"}>
              <Image height={30} width={30} src={`/assets/icons/${icon}`} alt={icon}></Image>
            </span>
            <span className="toggle_title">{title}</span>
          </div>
        </button>
        <div className={`toggle_content ${isExpanded ? "expanded" : ""}`}>{children}</div>
      </div>
    );
  };

  return (
    <CarrierStyled id="carrier">
      <h2>{`${Education} & ${Experience}`}</h2>
      <GlassSlab width={80}>
        <Grid className="carrier_wrapper">
          <Grid className="carrier_heading">
            <span>{Experience}</span>
          </Grid>
          <Grid className="carrier_details">
            <div className="experience_with">
              <ul>
                <li>
                  <span>{`Ferns N Petals ( July ${years[2022]} )`}</span>
                </li>
              </ul>
            </div>

            <SectionToggle title="Ferns N Petals (FNP) - Project Contributions" icon="pointing_right_index.svg">
              <Grid>
                <h4>
                  <a href="https://www.fnp.com" target="_blank">
                    <Image
                      height={25}
                      width={25}
                      src="/assets/icons/globe.svg"
                      alt="link"
                      style={{ marginRight: "10px" }}
                    />
                    {`Ferns N Petals (FNP)`}
                  </a>
                </h4>
                <ul>
                  <li>
                    <strong>Order Modification Functionality</strong>
                  </li>
                  <p>
                    Revolutionized user interaction with the platform by implementing intuitive order modification
                    features. Customers can effortlessly update crucial details, including :
                  </p>
                  <ul>
                    <li>Sender and receiver phone numbers</li>
                    <li>Sender and receiver names</li>
                    <li>Custom messages on cakes</li>
                    <li>Message card details</li>
                  </ul>
                </ul>

                <ul>
                  <li>
                    <strong>Auto-fill OTP Functionality</strong>
                  </li>
                  <p>
                    Engineered a cutting-edge auto-fill OTP functionality, elevating user authentication to a seamless
                    and secure experience :
                  </p>
                  <ul>
                    <li>Enabled automatic OTP filling for streamlined user login.</li>
                    <li>Implemented robust mechanisms for automatic user login upon successful OTP verification.</li>
                    <li>
                      Transformed the authentication process, reducing user effort and enhancing overall system
                      accessibility.
                    </li>
                  </ul>
                </ul>

                <ul>
                  <li>
                    <strong>Integration of Amazon Wallet</strong>
                  </li>
                  <p>
                    Successfully integrated Amazon Pay as a seamless payment option, enhancing the overall checkout
                    experience :
                  </p>
                  <ul>
                    <li>
                      Streamlined the checkout process, allowing users to pay seamlessly through their Amazon Wallet.
                    </li>
                  </ul>
                </ul>

                <ul>
                  <li>
                    <strong>Development of FNP Wallet</strong>
                  </li>
                  <p>
                    Designed and implemented a proprietary FNP Wallet, setting new standards for user experience and
                    convenience :
                  </p>
                  <ul>
                    <li>
                      Facilitated direct refunds into the FNP Wallet, providing users a secure and convenient refund
                      management solution.
                    </li>
                    <li>
                      Enabled users to make payments seamlessly through the FNP Wallet, offering an integrated and
                      efficient payment solution.
                    </li>
                  </ul>
                </ul>

                <ul>
                  <li>
                    <strong>International Store Address Handling</strong>
                  </li>
                  <p>
                    Designed and implemented Store Address Handling efficiently managed addresses across diverse
                    countries. With a tailored system accommodating varied formats, precise global order processing was
                    guaranteed, enhancing operational efficiency and customer satisfaction worldwide :
                  </p>
                  <ul>
                    <li>Managed store addresses across diverse countries where Ferns N Petals operates.</li>
                    <li>
                      Engineered a robust system for handling varied address formats based on each country unique
                      requirements, ensuring precise global order processing.
                    </li>
                  </ul>
                </ul>

                <ul>
                  <li>
                    <strong>Advanced Delivery Date Campaign Nudge</strong>
                  </li>
                  <p>
                    Introduced an advanced date of delivery campaign nudge feature, redefining customer engagement :
                  </p>
                  <ul>
                    <li>
                      Implemented a dynamic campaign nudge system, encouraging users to plan their deliveries well in
                      advance.
                    </li>
                    <li>
                      Utilized personalized notifications to prompt users, resulting in heightened customer satisfaction
                      and improved order management.
                    </li>
                  </ul>
                </ul>

                <ul>
                  <li>
                    <strong>Location Gate Popup Optimization</strong>
                  </li>
                  <p>
                    Strategically optimized and configured the location gate popup to align seamlessly with business
                    requirements :
                  </p>
                  <ul>
                    <li>
                      Customized the location gate popup to precisely meet the specific needs and goals of the business.
                    </li>
                    <li>
                      Implemented scenario-specific handling to provide users with a tailored and intuitive experience.
                    </li>
                    <li>
                      Adhered to stringent SEO requirements, optimizing content for superior search engine visibility
                      and overall platform performance.
                    </li>
                  </ul>
                </ul>

                <ul>
                  <li>
                    <strong>Testing with Jest</strong>
                  </li>
                  <p>Implemented comprehensive testing using Jest, a popular JavaScript testing framework :</p>
                  <ul>
                    <li>Aimed for 90-95% code coverage to ensure thorough examination of the codebase.</li>
                    <li>
                      This rigorous testing approach enhances the robustness and quality of the software, mitigating
                      potential bugs and errors.
                    </li>
                  </ul>
                </ul>

                <ul>
                  <li>
                    <strong>Additional Contributions</strong>
                  </li>
                  <ul>
                    <li>
                      Collaborated with cross-functional teams to enhance overall platform functionality and user
                      experience.
                    </li>
                    <li>
                      Conducted meticulous testing and debugging procedures, ensuring the reliability and fortification
                      of newly implemented features, thereby fortifying the platforms security and stability.
                    </li>
                    <li>
                      Actively participated in team meetings and contributed innovative ideas to improve system
                      efficiency.
                    </li>
                    <li>
                      Engaged in continuous learning and adoption of best practices to stay abreast of industry trends,
                      contributing to a dynamic and forward-thinking development environment.
                    </li>
                  </ul>
                </ul>

                <ul>
                  <li>
                    <strong>Technologies Used </strong>
                  </li>
                  <ul>
                    <li>
                      Next.js: Leveraging the power of Next.js, we built dynamic web applications with ease, ensuring
                      fast performance and seamless navigation.
                    </li>
                    <li>
                      React: With React at our core, we crafted interactive and engaging user interfaces that captivated
                      and delighted our audience.
                    </li>
                    <li>
                      SCSS: Harnessing the flexibility of SCSS, we styled our applications with precision, creating
                      visually stunning designs that left a lasting impression.
                    </li>
                    <li>
                      Jest: To ensure the reliability and quality of our code, we turned to Jest, a trusted testing
                      framework, conducting rigorous tests to catch any bugs or issues before they reached our users.
                    </li>
                  </ul>
                </ul>
              </Grid>
            </SectionToggle>

            <SectionToggle title="Ferns N Petals GharTak App" icon="pointing_right_index.svg">
              <Grid>
                <ul>
                  <li>
                    <strong>Enhanced Popup Functionality</strong>
                  </li>
                  <p>
                    Implemented an advanced popup feature to elevate user experience and address specific scenarios,
                    such as:
                  </p>
                  <ul>
                    <li>
                      Designed a popup notification for cases where a delivery boy completes a partial order delivery.
                    </li>
                    <li>
                      Strategically handled various business-use scenarios, ensuring tailored and intuitive
                      interactions.
                    </li>
                    <li>According to that handle different use cases.</li>
                  </ul>
                </ul>
                <ul>
                  <li>
                    <strong>Technologies Used:</strong>
                  </li>
                  <ul>
                    <li>
                      <strong>AngularJS:</strong> Leveraging the power of AngularJS, we developed dynamic and
                      interactive web applications with enhanced functionality and seamless user experiences.
                    </li>
                    <li>
                      <strong>CSS:</strong> Employing CSS, we meticulously crafted visually appealing designs, ensuring
                      a polished and professional presentation across our digital platforms.
                    </li>
                  </ul>
                </ul>
              </Grid>
            </SectionToggle>
          </Grid>

          <Grid className="carrier_heading">
            <span>{`${graduation} ( ${years[2018]} - ${years[2022]} )`}</span>
          </Grid>
          <Grid className="carrier_details">
            <div>{`Bachelor of Technology ( CSE ) from PDM University .`}</div>
          </Grid>
          <Grid className="carrier_heading">
            <span>{`${Senior} ${Secondary} ${Education} ( ${years[2016]} - ${years[2017]} )`}</span>
          </Grid>
          <Grid className="carrier_details">Cambridge kidz garden public school .</Grid>
        </Grid>
      </GlassSlab>
    </CarrierStyled>
  );
};

export default Carrier;
