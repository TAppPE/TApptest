import React from 'react';
import './choosesports.css';
import nav from '../Homepage/navigation';
import footer from '../Homepage/footer';
import { Link } from 'react-router-dom';

const Nav = nav;
const Foot = footer;

const choose = () => {
    return (
<div>
    < Nav />
    <h1>Choose Sports</h1>
    <Link to = '/dash' ><button id="sportsbtn">NEXT</button></Link>
    < Foot />
</div>

    );
};

export default choose;
