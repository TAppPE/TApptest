import React from 'react';
import './avatar.css';
import nav from '../navigation';
import footer from '../footer';
import { Link } from 'react-router-dom';

const Nav = nav;
const Foot = footer;

const avatar = () => {
    return (
<div>
    < Nav />
    <h1>Create your own avatar</h1>
    <Link to = '/choosesports' ><button id="btna">Generate Avatar!</button></Link>
    < Foot />
</div>

    );
};

export default avatar;