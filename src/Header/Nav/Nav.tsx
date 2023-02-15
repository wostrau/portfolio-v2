import React from 'react';
import styles from './Nav.module.css';

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <a href="src/Header/Nav/Nav">Main</a>
            <a href="src/Header/Nav/Nav">Skills</a>
            <a href="src/Header/Nav/Nav">Projects</a>
            <a href="src/Header/Nav/Nav">Contacts</a>
        </div>
    );
};