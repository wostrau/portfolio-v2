import React from 'react';
import styles from './Skills.module.css';
import {Skill} from './Skill/Skill';
import {Title} from '../common/components/title/Title';

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={styles.skillsContainer}>
                <Title value={'Skills'}/>
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