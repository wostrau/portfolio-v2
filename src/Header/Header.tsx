import React from 'react';
import styles from './Header.module.css';
import {Nav} from './Nav/Nav';
import styledContainer from '../common/Container.module.css';

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styledContainer.container}>
                <Nav/>
            </div>
        </div>
    );
};