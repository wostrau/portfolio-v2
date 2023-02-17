import React from 'react';
import styles from './Project.module.scss';

export const Project = (props: { title: string, description: string, style: { backgroundImage: string } }) => {
    return (
        <div className={styles.project}>
            <div  className={styles.image} style={props.style}>
                <a className={styles.viewBtn}>VIEW</a>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{props.title}</h3>
                <span className={styles.description}>
                {props.description}
                </span>
            </div>
        </div>
    );
};