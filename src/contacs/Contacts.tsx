import React from 'react';
import {Title} from '../common/components/title/Title';
import styles from './Contacts.module.scss';

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={styles.container}>
                <Title value={'Contacts'}/>
                <form className={styles.form}>
                    <input type="text" className={styles.formArea} placeholder={'Name'}/>
                    <input type="text" className={styles.formArea} placeholder={'eMail'}/>
                    <textarea className={styles.messageArea} placeholder={'Message'}/>
                    <button type={'submit'}>Send message</button>
                </form>
            </div>
        </div>
    );
};