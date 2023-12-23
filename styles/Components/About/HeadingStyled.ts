import { Grid, styled } from "@mui/joy";

type HeadingStyledProps = {
  isMobile?: boolean;
};

const HeadingStyled = styled(Grid)<HeadingStyledProps>`
  display: grid;
  gap: 15px;
  text-align: center;
  font-size: ${(props) => (props.isMobile ? "40px" : "120px")};
  font-weight: 600;
  background: linear-gradient(90deg, var(--bright-gray-color) 3%, var(--lightGray-color) 71%);
  background-clip: text;
  text-fill-color: transparent;
`;

export default HeadingStyled;
