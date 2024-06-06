import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Circles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    console.log("init");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
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
                    mode: ["attract", "slow"],
                  },
                  onHover: {
                    enable: false,
                    mode: ["slow", "blur"],
                  },
                  resize: {},
                },
                modes: {
                  grab: {
                    distance: 200,
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
                  value: { min: 0, max: 0.6 },
                  animation: {
                    enable: true,
                    speed: 0.1,
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
