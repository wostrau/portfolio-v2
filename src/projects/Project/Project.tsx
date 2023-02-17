import React from 'react';
import styles from './Project.module.css';

export const Project = (props: { title: string, description: string, style: { backgroundImage: string } }) => {
    return (
        <div className={styles.project}>
            <div
                className={styles.image}
                style={props.style}
            >
                <button className={styles.viewBtn}>VIEW</button>
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