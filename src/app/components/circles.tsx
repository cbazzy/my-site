import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Circles() {
  const [init, setInit] = useState(false);
  const [darkMode, setDarkMode] = useState(
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
  }, []);

  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const changeHandler = () => setDarkMode(darkModeQuery.matches);

    darkModeQuery.addEventListener("change", changeHandler);

    // Cleanup function to remove the event listener
    return () => darkModeQuery.removeEventListener("change", changeHandler);
  }, []);

  const particlesLoaded = async (container: any) => {};

  return (
    <>
      <div className="animate-fade">
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            style={{
              zIndex: 1,
            }}
            options={{
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: false,
                    mode: ["grab"],
                  },
                  onHover: {
                    enable: true,
                    mode: ["attract"],
                  },
                  resize: {},
                },
                modes: {
                  grab: {
                    distance: 1000,
                    links: {
                      opacity: darkMode ? 0.25 : 0.15,
                      decay: 1,
                      color: darkMode ? "#e0f2fe" : "#333333",
                    },
                  },
                  attract: {
                    distance: 300,
                    duration: 0.4,
                    speed: 0.001,
                    decay: 1,
                  },
                  push: {
                    quantity: 2,
                  },
                  repulse: {
                    distance: 50,
                    duration: 2,
                  },
                  slow: {
                    distance: 100,
                    quantity: 1,
                  },
                  blur: {
                    distance: 100,
                    duration: 20,
                  },
                },
              },
              particles: {
                color: {
                  value: ["#333333", "#666666", "#999999", "#cccccc"],
                },
                links: {
                  enable: false,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: { min: 0.3, max: 1.5 },
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                  },
                  value: 40,
                },
                opacity: {
                  value: { min: 0.1, max: 0.6 },
                  animation: {
                    enable: true,
                    speed: 0.05,
                    sync: false,
                  },
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 20, max: 100 },
                },
              },
              detectRetina: true,
            }}
          />
        )}
      </div>
    </>
  );
}
