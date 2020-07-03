import React from 'react';
import './chsprtHeader.css';
import GlobalFonts from '../font';

const sprtHeader = () => {
    return (
        <div id="sprtHeaderContainer">
            < GlobalFonts />
            <h1 id="sprtHeader"> Which Sports do you want to record?</h1>
            <h2 id="subHeading">Choose 3 or 4</h2>
        </div>
    )
}

export default sprtHeader;