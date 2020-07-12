import React from 'react';
import skills from './skillstennis';
import headerskills from './headertennis';
import GlobalFonts from '../../font';
import nav from '../../Homepage/navigation';
import footer from '../../Homepage/footer';
import Instruct from './instructionstennis';

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