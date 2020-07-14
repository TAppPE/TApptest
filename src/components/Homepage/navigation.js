import React from 'react';
import { Link } from 'react-router-dom';

import './nav.css';

const nav = () => {
  return (
        <div id="nav-background">
           <div id="nav-buttons">
             <div id="logo">
               <Link to ='./' ><button id="tapphp">T<span id="red">A</span><div id="hoverpp"><span id="PP">PP</span></div></button></Link>
              </div>
             <div id="endbtns">
              <button id="ABOUT">ABOUT</button>
            <button id="LOGIN">LOGIN</button>
            </div>
           </div>
        </div>
   );
};

export default nav;
