import { Grid, styled } from "@mui/joy";

export const FooterStyled = styled(Grid)`
  z-index: 1;
  display: flex;
  justify-content: center;
  padding: 20px 20px 10px 20px;
  bottom: 0;
  width: 100%;
  .copyright {
    bottom: 0;
    font-size: 10px;
    color: gray;
  }
`;
