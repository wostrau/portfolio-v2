import React from 'react';
import styles from './Nav.module.scss';
import {Link, animateScroll as scroll} from 'react-scroll'

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <Link
                activeClass={styles.active}
                to='main'
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={1}
                duration={500}
                delay={1000}
                isDynamic={true}
            >Main
            </Link>
            <Link
                activeClass={styles.active}
                to='skills'
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={1}
                duration={500}
                delay={1000}
                isDynamic={true}
            >Skills
            </Link>
            <Link
                activeClass={styles.active}
                to='projects'
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={1}
                duration={500}
                delay={1000}
                isDynamic={true}
            >Projects
            </Link>
            <Link
                activeClass={styles.active}
                to="contacts"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={1}
                duration={500}
                delay={1000}
                isDynamic={true}
            >Contacts
            </Link>
        </div>
    );
};