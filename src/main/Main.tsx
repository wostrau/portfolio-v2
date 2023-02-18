import React from 'react';
import styles from './Main.module.scss';

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <span>Hi There</span>
                    <h1>I am Ales Astrautsou</h1>
                    <p>a REACT developer</p>
                </div>
                <div className={styles.photo}>

                </div>
            </div>
        </div>
    );
};