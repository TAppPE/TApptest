import React from 'react';
import './footer.css';


const footer = () => {
    return ( 
    <div id="footer">
     <div id="leftdetails">
        <h4 >
            Company Name
        </h4>
        <h4 >
        Address
        </h4>
        <h4>
        Phone Number
        </h4>
     </div>
     <div id="middlefoot">
     <h1 id="tapplogofoot">TAPP PE</h1>
     <div id="rightdetails">
         <h4 class="deets">
             Contact Us
         </h4>
         <h4 class="deets">
             Our Team
         </h4>
         <h4 class="deets">
             About
         </h4>
         <h4 class="deets">
             Prices
         </h4>
     </div>
     </div>
     <div id="socialmedia">
        <h5>FBOOK</h5>
        <h5>Insta</h5>
        <h5>Twitter</h5>
     </div>
    </div> 
    );

};

export default footer;