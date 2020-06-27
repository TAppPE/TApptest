import React from 'react';
import './signupForm.css';
import { Link } from 'react-router-dom';

const form = () => {
    return (
        <div id="sectionContainer">
            <div id="sideHype">
                <h1 id="sideHypeFont">Discover the world's top educational app for PE</h1>
             <div id="runnerImage">
                 <div id="imagerun"></div>
             </div>
            </div>
            <div id="formContainer">
                <div id="textheader">
                    <h1 id="signheader"> Sign Up to TApp PE</h1>
                </div>
                <div id="formInner">
                <form action="/my-handling-form-page" method="post">
                <ul id="formInput">
                     <li class="column">
                        <label class="label" for="name">Full name</label>
                        <input type="text" id="name" name="user_name" />
                     </li>
                     <li class="column">
                        <label class="label" for="mail">Email</label>
                        <input type="email" id="mail" name="user_email" />
                     </li>
                     <li class="column">
                         <label class="label" for="role">School Role</label>
                         <input type="text" id="role" name="user_message" />
                     </li>
                  </ul>
                 </form>

                </div>
                <div id="btn1">
                    <Link to ='/avatar' > <button id="register">Register</button> </ Link>
                </div>
            </div>

        </div>
    )
}

export default form;