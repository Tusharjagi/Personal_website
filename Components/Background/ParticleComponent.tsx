import React, { useCallback, useEffect, useState } from "react";
import styles from "../../styles/components/Background/particleComponent.module.scss";
import { Particles, type IParticlesProps } from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine, IOptions } from "tsparticles-engine";

const ParticlesComponent: React.FC = () => {
  const [showParticles, setShowParticles] = useState(true);
  const particleOptions: IParticlesProps = {
    particles: {
      number: {
        value: 600,
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
        value: 0.4,
        random: true,
      },
      size: {
        value: 1.5,
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "top",
        straight: true,
        out_mode: "out",
        bounce: true,
      },
    },
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 200;
    if (scrollPosition > scrollThreshold) {
      setShowParticles(false);
    } else {
      setShowParticles(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const init = useCallback(async (engine: Engine): Promise<void> => {
    await loadFull(engine);
  }, []);

  return (
    <div className={styles.particle_wrapper}>
      {showParticles && <Particles options={particleOptions as IOptions} init={init} />}
    </div>
  );
};

export default ParticlesComponent;
