import React from 'react';
import './sports.css';

const sports = () => {
    return (
        <div id="allChoices">
            <div id="sportRowA">
                <div class="sportChoiceImage">
                    <div id="sport1">
                       <button class="hoverEff"></button>
                       <p class="text">NETBALL</p>
                    </div>
                </div>
                <div class="sportChoiceImage">
                    <div id="sport2">
                       <button class="hoverEff"></button>
                       <p class="text">CRICKET</p>
                    </div>
               </div>
               <div class="sportChoiceImage">
                   <div id="sport3">
                       <button class="hoverEff"></button>
                       <p class="text">TENNIS</p>
                    </div>
                </div>
                <div class="sportChoiceImage">
                    <div id="sport4">
                        <button class="hoverEff"></button>
                        <p class="text">ROWING</p>
                    </div>
                </div>
            </div>

            <div id="sportRowB">
            <div class="sportChoiceImage"><div id="sport5"><button class="hoverEff"></button><p class="text">DANCE</p></div></div>
            <div class="sportChoiceImage"><div id="sport6"><button class="hoverEff"></button><p class="text">RUGBY</p></div></div>
            <div class="sportChoiceImage"><div id="sport7"><button class="hoverEff"></button><p class="text">BADMINTON</p></div></div>
            <div class="sportChoiceImage"><div id="sport8"><button class="hoverEff"></button><p class="text">HANDBALL</p></div></div>
            </div>
            <div id="sportRowC">
            <div class="sportChoiceImage"><div id="sport9"><button class="hoverEff"></button><p class="text">BASKETBALL</p></div></div>
            <div class="sportChoiceImage"><div id="sport10"><button class="hoverEff"></button><p class="text">FOOTBALL</p></div></div>
            <div class="sportChoiceImage"><div id="sport11"><button class="hoverEff"></button><p class="text">KAYAKING</p></div></div>
            <div class="sportChoiceImage"><div id="sport12"><button class="hoverEff"></button><p class="text">DIVING</p></div></div>
            </div>
        </div>
    );
};

export default sports;