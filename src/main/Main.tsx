import React from 'react';
import styles from './Main.module.scss';
import {ParticlesTS} from '../common/components/particles/ParticlesTS';

export const Main = () => {

    return (
        <div className={styles.mainBlock}>
            <ParticlesTS/>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Hi There</span>
                    <span>I am Ales <span>Astrautsou</span></span>
                    <h1>REACT developer.</h1>
                </div>
                <div className={styles.photo}>
                    <div className={styles.image}></div>
                </div>
            </div>
        </div>
    );
};