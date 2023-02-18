import React from 'react';
import styles from './Footer.module.scss';
import {Title} from '../common/components/title/Title';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <Title value={'Ales Astrautsou'}/>
                <div className={styles.socialIcons}>
                    <div className={styles.socialIcon}>
                        <a href={''}>
                            <img src="" alt="Github icon"/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href={''}>
                            <img src="" alt="Linkedin icon"/>
                        </a>
                    </div>
                </div>
                <span className={styles.copyright}>2023 All rights reserved</span>
            </div>
        </div>
    );
};