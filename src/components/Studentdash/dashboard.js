import React from 'react';
import './dashboard.css';
import nav from '../Homepage/navigation';
import footer from '../Homepage/footer';
import sportsDash from './sportsDash';
import clubinfo from './ClubInfo';
import GlobalFonts from '../font';
import finalVid from './finalvideo';

const Nav = nav;
const Foot = footer;
const SprtDash = sportsDash;
const Clubinfo = clubinfo;
const FinalVid = finalVid;

const studentDash = () => {
    return (
<div>
    <GlobalFonts />
    < Nav />
    < SprtDash />
    < FinalVid />
    < Clubinfo />
    < Foot />
</div>

    );
};

export default studentDash;
