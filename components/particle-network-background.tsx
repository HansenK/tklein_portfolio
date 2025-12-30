"use client";

import { useEffect, useMemo, useState } from "react";
import ParticleNetwork from "particle_network";
import { useTheme } from "next-themes";

interface ParticleNetworkBackgroundProps {
  numberOfParticles?: number;
  gridCellSize?: number;
  mouseConnectionRange?: number;
}

const ParticleNetworkBackground = ({
  numberOfParticles,
  gridCellSize,
  mouseConnectionRange,
}: ParticleNetworkBackgroundProps) => {
  const { theme } = useTheme();
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [particleNetwork, setParticleNetwork] = useState<any>(null); // TODO: Fix this type

  const particleColor = useMemo(
    () => (theme === "dark" ? "rgba(191, 191, 191, 1)" : "rgba(0, 0, 0, 1)"),
    [theme]
  );
  const backgroundColor = useMemo(
    () => (theme === "dark" ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)"),
    [theme]
  );

  useEffect(() => {
    if (canvas && !particleNetwork) {
      const newParticleNetwork = new ParticleNetwork(canvas, {
        numberOfParticles,
        gridCellSize,
        mouseConnectionRange,
        particleColor,
        backgroundColor,
      });
      newParticleNetwork.start();
      setParticleNetwork(newParticleNetwork);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas]);

  useEffect(() => {
    if (particleNetwork) {
      particleNetwork.setColors({
        particleColor,
        backgroundColor,
      });
    }
  }, [particleNetwork, particleColor, backgroundColor]);

  return (
    <canvas
      ref={setCanvas}
      width={500}
      height={500}
      className="absolute top-0 left-0"
    />
  );
};

export default ParticleNetworkBackground;
