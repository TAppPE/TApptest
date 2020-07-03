import React from 'react';
import './Clubinfo.css';
import GlobalFonts from '../font';

const ClubInfo = () => {
    return (
        <div id="ClubInfo">
            <GlobalFonts />
                <h1>Club Information</h1>
                <h2>Football</h2>
                <div class="info">
                  <h4>Club Name:</h4>
                 <h5>AFC Bournemouth</h5>
                  <h4>Email:</h4>
                  <h5>sdfg@lsdugf.com</h5>
                </div>
                
                  <h2>Basketball</h2>

                  <div class="info">
                  <h4>Club Name:</h4>
                  <h5>South Coast Tigers</h5>
                  <h4>Email:</h4>
                  <h5>sdfg@lsdugf.com</h5>
                </div>
              
                  <h2>Tennis:</h2>
                  <div class="info">
                  <h4>Club Name:</h4>
                 <h5>Wimbledon</h5> 
                  <h4>Email:</h4>
                  <h5>sdfg@lsdugf.com</h5>
                </div>
        </div>
    );
};

export default ClubInfo;
