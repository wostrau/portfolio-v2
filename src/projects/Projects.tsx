import React from 'react';
import styles from './Projects.module.css';
import styledContainer from '../common/Container.module.css';
import {Project} from './Project/Project';
import {Title} from '../common/title/Title';
import projectImg from '../assets/images/Imports1.jpeg';

export const Projects = () => {
    const background = {backgroundImage: `url(${projectImg})`};

    return (
        <div className={styles.projectsBlock}>
            <div className={`${styledContainer.container} ${styles.projectsContainer}`}>
                <Title
                    value={'Projects'}
                />
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