import React from 'react';
import styles from './Title.module.scss';

export const Title = (props: { value: string }) => {
    return (
        <div className={styles.title}>
            <h2>{props.value}</h2>
        </div>
    );
};