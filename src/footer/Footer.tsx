import React from 'react';
import styles from './Footer.module.css';
import styledContainer from '../common/Container.module.css';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={`${styledContainer.container} ${styles.footerContainer}`}>
                <h2 className={styles.title}>Ales Astrautsou</h2>
                <div className={styles.socialIcons}>
                    <div className={styles.socialIcon}></div>
                    <div className={styles.socialIcon}></div>
                    <div className={styles.socialIcon}></div>
                    <div className={styles.socialIcon}></div>
                </div>
                <span className={styles.copyright}>2023 All rights reserved</span>
            </div>
        </div>
    );
};