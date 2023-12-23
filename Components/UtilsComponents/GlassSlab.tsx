import { GlassSlabStyled, SlabAlignment } from "@/styles/Components/UtilsComponents/GlassSlabStyled";

type GlassSlabProps = {
  children: React.ReactNode;
  width: number;
  left?: boolean;
  right?: boolean;
  center?: boolean;
};

const GlassSlab = ({ children, width, left, right, center }: GlassSlabProps): JSX.Element => {
  const applyAlignments = () => {
    switch (true) {
      case left:
        return "left";
      case right:
        return "right";
      case center:
        return "center";
      default:
        return "center";
    }
  };

  return (
    <SlabAlignment justifyContent={applyAlignments()} alignItems={applyAlignments()}>
      <GlassSlabStyled width={`${width}%`}>
        <span>{children}</span>
      </GlassSlabStyled>
    </SlabAlignment>
  );
};

export default GlassSlab;
