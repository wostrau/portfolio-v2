import React from 'react';
import {Title} from '../common/components/title/Title';
import styles from './Contacts.module.scss';
import {Fade} from 'react-awesome-reveal';

export const Contacts = () => {
    return (
        <div id={'contacts'} className={styles.contactsBlock}>
            <div className={styles.container}>
                <Title value={'Contacts'}/>
                <Fade>
                <form className={styles.form}>
                    <input type="text" className={styles.formArea} placeholder={'Name'}/>
                    <input type="text" className={styles.formArea} placeholder={'eMail'}/>
                    <textarea className={styles.messageArea} placeholder={'Message'}/>
                    <button type={'submit'}>Send message</button>
                </form>
            </Fade>
            </div>
        </div>
    );
};