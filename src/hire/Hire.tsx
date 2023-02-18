import React from 'react';
import styles from './Hire.module.css';

export const Hire = () => {
    return (
        <div className={styles.hireBlock}>
            <div className={styles.hireContainer}>
                <h2 className={styles.title}>I am available for freelance</h2>
                <button className={styles.hireBtn}>HIRE</button>
            </div>

        </div>
    );
};