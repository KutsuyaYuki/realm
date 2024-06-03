import React, { useCallback, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Container, Engine } from '@tsparticles/engine';

const TriangleBackground: React.FC = () => {
  const [ init, setInit ] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
      initParticlesEngine(async (engine: Engine) => {
          // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
          // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
          // starting from v2 you can add only the features you need reducing the bundle size
          //await loadAll(engine);
          //await loadFull(engine);
          await loadSlim(engine);
          //await loadBasic(engine);
      }).then(() => {
          setInit(true);
      });
  }, []);

  const particlesLoaded = async (container: Container | undefined) => {
      console.log(container);
  };
  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            particles: {
              number: {
                value: 100
              },
              color: {
                value: "#ff0000",
                animation: {
                  enable: true,
                  speed: 20,
                  sync: true
                }
              },
              shape: {
                type: "circle"
              },
              opacity: {
                value: 0.5
              },
              size: {
                value: { min: 1, max: 3 }
              },
              links: {
                enable: true,
                distance: 100,
                color: "random",
                opacity: 0.4,
                width: 1,
                triangles: {
                  enable: true,
                  color: "#ffffff",
                  opacity: 0.1
                }
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                outModes: "out"
              }
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "attract"
                },
                onClick: {
                  enable: false,
                  mode: "push"
                }
              },
              modes: {
                attract: {
                  distance: 600,
                  duration: 0.1,
                  easing: "ease-out-quad",
                  factor: 1,
                  maxSpeed: 50,
                  speed: 1
                },
                push: {
                  quantity: 4
                }
              }
            },
            background: {
              color: "#000000"
            }
          }}
        />
      )}
    </>
  );
};

export default TriangleBackground;
