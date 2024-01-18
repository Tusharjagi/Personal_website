import { Grid, styled } from "@mui/joy";

type SlabAlignmentProps = {
  justifyContent?: string;
  alignItems?: string;
};

export const SlabAlignment = styled(Grid)<SlabAlignmentProps>`
  position: relative;
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

type GlassSlabStyledProps = {
  width?: string;
};

export const GlassSlabStyled = styled(Grid)<GlassSlabStyledProps>`
  width: ${(props) => props.width || 0};
  position: relative;
  text-align: justify;
  color: gray;
  padding: 20px;
  background: rgba(78, 134, 166, 0.13);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.1px);
  -webkit-backdrop-filter: blur(3.1px);
  border: 1px solid rgba(78, 134, 166, 0.4);
  word-wrap: break-word;

  &:hover {
    box-shadow: 0 4px 30px var(--cyan-color);
    transition: box-shadow 300ms ease-in;
  }
  &:not(:hover) {
    transition: box-shadow 300ms ease-in;
  }
`;
