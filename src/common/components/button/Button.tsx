import React from 'react';
import styles from './Button.module.scss';

export const Button = (props: {text: string}) => {
    return <a href={''} className={styles.btn}>{props.text}</a>
};