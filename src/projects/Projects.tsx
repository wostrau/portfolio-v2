import React from 'react';
import styles from './Projects.module.scss';
import {Project} from './Project/Project';
import {Title} from '../common/components/title/Title';
import projectImg from '../assets/images/Imports1.jpeg';

export const Projects = () => {
    const background = {backgroundImage: `url(${projectImg})`};

    return (
        <div
            id='projects'
            className={styles.projectsBlock}
        >
            <div className={styles.container}>
                <Title value={'Projects'}/>
                <div className={styles.projects}>
                    <Project
                        title={'SN'}
                        style={background}
                        description={'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'}/>
                    <Project
                        title={'TL'}
                        style={background}
                        description={'bla'}/>
                </div>
            </div>
        </div>
    );
};