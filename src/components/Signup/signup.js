import React from 'react';
import './signup.css';
import nav from '../Homepage/navigation';
import footer from '../Homepage/footer';
import signUp from './signupForm';

const Nav = nav;
const Foot = footer;
const SignUp = signUp;

const signup = () => {
    return (
    <div id="signupPage">
        <Nav />
        <SignUp />
        <Foot/>
    </div>
    )
};

export default signup;