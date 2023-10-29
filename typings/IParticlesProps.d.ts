import { type Container, type Main } from "tsparticles";
import { type Interactivity, type ParticlesOptions } from "tsparticles/dist/Options/Classes/Options";

declare module "react-tsparticles" {
  export interface IParticlesProps {
    id?: string;
    width?: string;
    height?: string;
    particles?: ParticlesOptions;
    interactivity?: Interactivity;
    container?: Container;
    style?: Record<string, string>;
    className?: string;
    canvasClassName?: string;
    main?: Main;
  }

  export const Particles: React.FC<IParticlesProps>;
}
