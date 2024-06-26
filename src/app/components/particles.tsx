import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

// these are the particles that are in the background of the landing page

export default function Particle() {
  const [init, setInit] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    console.log("init");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );
    darkModeMediaQuery.addListener((e) => {
      const newIsDarkMode = e.matches;
      setIsDarkMode(newIsDarkMode);
    });
  }, []);

  const particlesLoaded = async (container: any) => {};

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            zIndex: 1,
          }}
          // configuration of the particle effects: colours, speed, size, etc.
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: ["attract", "slow"],
                },
                onHover: {
                  enable: true,
                  mode: ["grab", "repulse"],
                },
                resize: {},
              },
              modes: {
                grab: {
                  distance: 200,
                  links: {
                    opacity: 1,
                  },
                },
                attract: {
                  distance: 1000,
                  duration: 0.1,
                  speed: 10,
                },
                push: {
                  quantity: 2,
                },
                repulse: {
                  distance: 50,
                  duration: 2,
                },
              },
            },
            particles: {
              color: {
                value: isDarkMode ? "#bae6fd" : "#333333",
              },
              links: {
                color: isDarkMode ? "#e0f2fe" : "#333333",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1.2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 160,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}
