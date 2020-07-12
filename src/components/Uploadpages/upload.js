import React from 'react';
import './upload.css';
import nav from '../Homepage/navigation';
import foot from '../Homepage/footer';
import example from './exemplarupload';
import headline from './headline';
import submitbtn from './submitbtn';

const Nav = nav;
const Foot = foot;
const Exemplar = example;
const Headline = headline;
const SubmitButton = submitbtn;

const uploadpage = () => {
    return (
    <div id="uploadpage">
       < Nav />
       < Headline />
       < Exemplar />
       < SubmitButton />
       < Foot />
    </div>
    );
};

export default uploadpage;