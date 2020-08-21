import React from 'react';
import './signupForm.css';
import registerCreate from './registerCreate';


const RegisterCreate = registerCreate;


const form = () => {
    return (
        <div id="sectionContainer">
            <div id="sideHype">
                <h1 id="sideHypeFont">Discover the world's top educational app for PE</h1>
             <div id="runnerImage">
                 <div id="imagerun" class="img-fluid"></div>
             </div>
            </div>
            <div id="formContainer">

                < RegisterCreate />
            </div>

        </div>
    )
}



export default form;