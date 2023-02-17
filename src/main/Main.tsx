import React from 'react';
import styles from './Main.module.css';
import styleContainer from '../common/Container.module.css';

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
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