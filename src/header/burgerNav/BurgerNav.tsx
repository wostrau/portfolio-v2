import React, {useState} from 'react';
import styles from './BurgerNav.module.scss';
import {Link} from 'react-scroll'

export const BurgerNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.burgerNav}>
            <div className={
                isOpen
                    ? `${styles.burgerNavItems} ${styles.show}`
                    : styles.burgerNavItems
            }>
                <Link
                    activeClass={styles.active}
                    to="main"
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
                    to="skills"
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
                    to="projects"
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
            <div
                className={styles.burgerBtn}
                onClick={() => setIsOpen(!isOpen)}
            >x
            </div>
        </div>
    );
};