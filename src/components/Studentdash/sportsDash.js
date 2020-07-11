import React from 'react';
import { Link } from 'react-router-dom';
import './sportsDash.css';
import GlobalFonts from '../font';

const sportsDash = () => {
    return (
        <div id="section">
            < GlobalFonts />
            <div id="welcomeContainer">
            <h1 id="welcome"> Hi Sam</h1>
            <h3 id="welcome2">Welcome to your dashboard</h3>
            </div>
           
            <div id="chosenSportContainer">

                <div class="sportStats">                  
                   <div id="sportimage">
         < Link to ='/Footballskill' ><button class="invisible-btn">
                   </button> </ Link >
                   </div>                  
                   <div id="trafficLight">
                       <div class="circle"></div>
                       <div class="circle"></div>
                       <div class="circle"></div>
                       <div class="circle"></div>
                   </div>                 
                   <div id="videoSubmitted">
                       <h1 class="recorded">Recorded</h1>
                       <h2 class="stats">4/4</h2>
                   </div>
                   <div id="videoAccepted">
                       <h1 class="accepted">Accepted</h1>
                       <h2 class="statsb">4/4</h2>
                   </div>
                </div>

                <div class="sportStats">
                   <div id="sportimageb">
                    <button class="invisible-btn">
                     </button>
                  </div>
                   <div id="trafficLight">
                         <div class="circle"></div>
                          <div class="circle"></div>
                          <div class="circle"></div>
                          <div class="circle"></div>
                   </div>
                   <div id="videoSubmitted">
                      <h1 class="recorded">Recorded</h1>
                       <h2 class="stats">4/4</h2>
                   </div>
                   <div id="videoAccepted">
                       <h1 class="accepted">Accepted</h1>
                       <h2 class="statsb">4/4</h2>
                   </div>
                </div>

                <div class="sportStats">
                   <div id="sportimagec">
                       <button class="invisible-btn">
                        </button>
                       </div>
                   <div id="trafficLight">
                         <div class="circle"></div>
                          <div class="circle"></div>
                          <div class="circle"></div>
                          <div class="circle"></div>
                   </div>
                   <div id="videoSubmitted">
                       <h1 class="recorded">Recorded</h1>
                       <h2 class="stats">4/4</h2>
                   </div>
                   <div id="videoAccepted">
                      <h1 class="accepted">Accepted</h1>
                       <h2 class="statsb">4/4</h2>
                   </div>
                </div>

            </div>
        </div>
    )
}

export default sportsDash;
