import React from 'react';
import card from './cards'
import cardb from './cardb'
import cardc from './cardc'
import './hypeb.css';

const Card = card;
const Cardb = cardb;
const Cardc = cardc;

const hypeb = () => {
 return (
    <div id="hypeb">
        <div id="wholesection">
            <div id="itemss">
               <h2 id="headertextB">TApp PE organises all the footage <span id="PDitalic">instantly</span></h2>
            </div>
            <div id="cardss">
                < Card/> <Cardb /> <Cardc />
            </div>
        </div>
    </div>
 );
};

export default hypeb;