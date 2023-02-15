import React from 'react';
import styledContainer from '../common/Container.module.css';
import styles from './Skills.module.css';
import {Skill} from './Skill/Skill';

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styledContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>
                    SKILLS
                </h2>
                <div className={styles.skills}>
                    <Skill
                        title={'REACT JS'}
                        description={'bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla'}
                    />
                    <Skill
                        title={'REDUX'}
                        description={'bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla'}
                    />
                    <Skill
                        title={'TYPESCRIPT'}
                        description={'bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla'}
                    />
                </div>
            </div>
        </div>
    );
};