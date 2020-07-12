import React from 'react';
import skills from './skills';
import headerskills from './headerskills';
import GlobalFonts from '../../font';
import nav from '../../Homepage/navigation';
import footer from '../../Homepage/footer';
import Instruct from './instructions';

const Headerskills = headerskills;
const Skills = skills;
const Nav = nav;
const Footer = footer;
const Instructions = Instruct;


const skillspage = () => {
    return (

        <div id="skillsvids">
            <GlobalFonts />
            <Nav />
            <Headerskills />
            <Instructions />
            <Skills />
            
            <Footer />
        </div>
    )
};

export default skillspage;