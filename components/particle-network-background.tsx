"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";
import type { ISourceOptions } from "@tsparticles/engine";
import ThemeButton from "./theme-button";

const ParticleNetworkBackground = () => {
  const { theme } = useTheme();
  const [init, setInit] = useState(false);

  const particleColor = theme === "dark" ? "#bfbfbf" : "#000000";
  const backgroundColor = theme === "dark" ? "#000000" : "#ffffff";

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: 0 },
      background: { color: { value: backgroundColor } },
      fpsLimit: 120,
      detectRetina: true,
      interactivity: {
        detectsOn: "canvas",
        events: { onHover: { enable: true, mode: "grab" } },
        modes: { grab: { distance: 175, links: { opacity: 1 } } },
      },
      particles: {
        color: { value: particleColor },
        links: {
          color: particleColor,
          distance: 175,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          outModes: { default: "bounce" },
          speed: 1.5,
        },
        number: { density: { enable: true, area: 1000 }, value: 120 },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 4 } },
      },
    }),
    [particleColor, backgroundColor]
  );

  if (!init) return null;

  return (
    <>
      <Particles options={options} />
      <ThemeButton />
    </>
  );
};

export default ParticleNetworkBackground;
