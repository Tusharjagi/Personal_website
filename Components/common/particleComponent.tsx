import React, { useCallback } from "react";
import styles from "../../styles/components/common/particleComponent.module.scss";
import { Particles, type IParticlesProps } from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine, IOptions } from "tsparticles-engine";

const ParticlesComponent: React.FC = () => {
  const particleOptions: IParticlesProps = {
    particles: {
      number: {
        value: 500,
        density: {
          enable: true,
          value_area: 1500,
        },
      },
      color: {
        value: "#fff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.2,
        random: true,
      },
      size: {
        value: 1.5,
        random: true,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "top",
        straight: true,
        out_mode: "out",
        bounce: true,
      },
    },
  };

  const init = useCallback(async (engine: Engine): Promise<void> => {
    await loadFull(engine);
  }, []);

  return (
    <div className={styles.particle_wrapper}>
      <Particles options={particleOptions as IOptions} init={init} />
    </div>
  );
};

export default ParticlesComponent;
