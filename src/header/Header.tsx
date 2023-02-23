import React from 'react';
import styles from './Header.module.scss';
import {BurgerNav} from './burgerNav/BurgerNav';
import {Nav} from './Nav/Nav';

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <Nav/>
                <BurgerNav/>
            </div>
        </div>
    );
};