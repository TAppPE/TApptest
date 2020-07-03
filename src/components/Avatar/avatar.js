import React from 'react';
import './avatar.css';
import nav from '../Homepage/navigation';
import footer from '../Homepage/footer';
import { Link } from 'react-router-dom';
import avatarButtons from './avatarButtons';
import headerAv from './headerAv';

const Nav = nav;
const Foot = footer;
const AvBtns = avatarButtons;
const HeaderAva = headerAv;

const avatar = () => {
    return (
<div>
     < Nav />
    < HeaderAva />
    < AvBtns />
    <Link to = '/choosesports' ><button id="btna">Generate Avatar!</button></Link>
    < Foot />
</div>

    );
};

export default avatar;
