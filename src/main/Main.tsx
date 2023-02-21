import React from 'react';
import styles from './Main.module.scss';
import {ParticlesTS} from '../common/components/particles/ParticlesTS';
import {Fade} from 'react-awesome-reveal';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';

export const Main = () => {

    return (
        <div
            id={'#main'}
            className={styles.mainBlock}>
            <div className={styles.particles}>
                <ParticlesTS/>
            </div>
            <div className={styles.container}>
                <Fade>
                    <div className={styles.greeting}>
                        <span>Hi There</span>
                        <span>I am Ales <span>Astrautsou</span></span>
                        {/*<h1>REACT developer.</h1>*/}
                        <ReactTypingEffect text={['REACT developer.']}/>
                    </div>
                    <Tilt>
                        <div className={styles.photo}>
                            <div className={styles.image}></div>
                        </div>
                    </Tilt>
                </Fade>
            </div>
        </div>
    );
};