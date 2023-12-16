import { Grid, styled } from "@mui/joy";

export const AboutStyled = styled(Grid)`
  display: grid;
  gap: 15px;
  text-align: center;
  font-size: 120px;
  font-weight: 600;
  background: linear-gradient(90deg, var(--bright-gray-color) 3%, var(--lightGray-color) 71%);
  background-clip: text;
  text-fill-color: transparent;
`;
