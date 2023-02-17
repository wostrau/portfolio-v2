import React from 'react';
import styles from './Nav.module.css';

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <a href="src/header/Nav/Nav">Main</a>
            <a href="src/header/Nav/Nav">Skills</a>
            <a href="src/header/Nav/Nav">Projects</a>
            <a href="src/header/Nav/Nav">Contacts</a>
        </div>
    );
};