import React from 'react';
import './ClassCard.css';

const ClassCard = () => {
    return (
       <div id="mainContainer">
         <div id="TitleCont">
             <h1 id="MainTitle">Year 10</h1>
             <h2 id="SubTitle">Group B</h2>
         </div>
         <div id="imageCont">
             <div id="mainImage"></div>
         </div>
         <div id="btnContainer">
         <button id="View">View Class</button>
         </div>
       </div>
    );
};

export default ClassCard;