import React from 'react';
import skills from './skills';
import headerskills from './headerskills';
import GlobalFonts from '../font';

const Headerskills = headerskills;
const Skills = skills;


const skillspage = () => {
    return (

        <div>
            <GlobalFonts />
            
            <Headerskills />
            <Skills />

        </div>
    )
};

export default skillspage;