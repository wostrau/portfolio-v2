import React, {useCallback} from 'react';
import type {Container, Engine} from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';

export const ParticlesTS = () => {
    const particlesInit = useCallback(async (engine: Engine) => await loadFull(engine), []);
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return <Particles id='particles'
                      init={particlesInit}
                      loaded={particlesLoaded}
                      options={{
                          background: {
                              color: {
                                  value: '',
                              },
                          },
                          fpsLimit: 120,
                          interactivity: {
                              events: {
                                  onClick: {
                                      enable: true,
                                      mode: 'push',
                                  },
                                  onHover: {
                                      enable: true,
                                      mode: 'repulse',
                                  },
                                  resize: true,
                              },
                              modes: {
                                  push: {
                                      quantity: 4,
                                  },
                                  repulse: {
                                      distance: 150,
                                      duration: 0.4,
                                  },
                              },
                          },
                          particles: {
                              color: {
                                  value: '#ffffff',
                              },
                              links: {
                                  color: '#ffffff',
                                  distance: 150,
                                  enable: true,
                                  opacity: 0.3,
                                  width: 1,
                              },
                              collisions: {
                                  enable: true,
                              },
                              move: {
                                  direction: 'none',
                                  enable: true,
                                  outModes: {
                                      default: 'bounce',
                                  },
                                  random: false,
                                  speed: 1,
                                  straight: false,
                              },
                              number: {
                                  density: {
                                      enable: true,
                                      area: 800,
                                  },
                                  value: 80,
                              },
                              opacity: {
                                  value: 0.3,
                              },
                              shape: {
                                  type: 'circle',
                              },
                              size: {
                                  value: {min: 1, max: 1},
                              },
                          },
                          detectRetina: true,
                      }}/>
};