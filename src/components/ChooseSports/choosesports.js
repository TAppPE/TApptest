import React from 'react';
import './choosesports.css';
import nav from '../Homepage/navigation';
import footer from '../Homepage/footer';
import { Link } from 'react-router-dom';
import sports from './sports';
import sprtHeader from './chsprtHeader';

const Nav = nav;
const Foot = footer;
const SportChoices = sports;
const SprtHeader = sprtHeader;

const choose = () => {
    return (
<div>
    < Nav />
    < SprtHeader />
    < SportChoices />
    <Link to = '/dash' ><button id="sportsbtn">NEXT</button></Link>
    < Foot />
</div>

    );
};

export default choose;