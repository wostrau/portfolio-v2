import React from 'react';
import styledContainer from '../common/Container.module.css';
import { Title } from '../common/title/Title';
import styles from './Contacts.module.css';

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styledContainer.container} ${styles.container}`}>
                <Title value={'Contacts'}/>
                <form className={styles.contactForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                    <button
                        type={'submit'}
                        className={styles.submitBtn}
                    >SEND
                    </button>
                </form>
            </div>
        </div>
    );
};