import React from 'react';
import skills from './skillsbasketball';
import headerskills from './headerbasketball';
import GlobalFonts from '../../font';
import nav from '../../Homepage/navigation';
import footer from '../../Homepage/footer';
import Instruct from './instructionsbasketball';

const Headerskills = headerskills;
const Skills = skills;
const Nav = nav;
const Footer = footer;
const Instructions = Instruct;


const Tennis = () => {
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

export default Tennis;