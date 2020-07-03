import React from 'react';
import './avatarButtons.css';


const avatarButtons = () => {
    return (
        <div id="avatarBtns">
            <div id="options">
               <button class="slidemenu"><span onClick="openNav()">Hair Length</span></button>
               <button class="slidemenu"><span onClick="openNav()">Face Shape</span></button>
               <button class="slidemenu"><span onClick="openNav()">Eyes</span></button>
               <button class="slidemenu"><span onClick="openNav()">Mouth</span></button>
               <button class="slidemenu"><span onClick="openNav()">Nose</span></button>
               <button class="slidemenu"><span onClick="openNav()">Clothes</span></button>
               <button class="slidemenu"><span onClick="openNav()">Other</span>r</button>
            </div>
        <div id="avatarContainer">
            <div id="avatar">
                <div id="hair">
                </div>
                <div id="face">
                    <div id="eyes"></div>
                    <div id="mouth"></div>
                    <div id="nose"></div>
                    <div id="eyebrows"></div>
                    <div id="other"></div>
                </div>
                <div id="body"></div>

            </div>
        </div>
 </div>
    )
};

export default avatarButtons;
