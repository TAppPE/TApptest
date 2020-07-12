import React from 'react';
import './skillstennis.css';
import { Link } from 'react-router-dom';

const skills = () => {
    return (
     <div id="skillscontainer">
         <div class="skills">
         <Link to ='/fb1'><button class="skillBtn"><h3 class="number">#1</h3></button></Link>
         </div>
         <div class="skills">
         <Link to ='/fb1'><button class="skillBtn"><h3 class="number">#2</h3></button></Link>
         </div>
         <div class="skills">
         <Link to ='/fb1'><button class="skillBtn"><h3 class="number">#3</h3></button></Link>
         </div>
         <div class="skills">
         <Link to ='/fb1'><button class="skillBtn"><h3 class="number">#4</h3></button></Link>
         </div>
         <div class="skills">
         <Link to ='/fb1'><button class="skillBtn"><h3 class="number">#5</h3></button></Link>
         </div>
         <div class="skills">
         <Link to ='/fb1'><button class="skillBtn"><h3 class="number">#6</h3></button></Link>
         </div>
         <div class="skills">
         <Link to ='/fb1'><button class="skillBtn"><h3 class="number">#7</h3></button></Link>
         </div>
         <div class="skills">
         <Link to ='/fb1'><button class="skillBtn"><h3 class="number">#8</h3></button></Link>
         </div>
         <div class="skills">
         <Link to ='/fb1'><button class="skillBtn"><h3 class="number">#9</h3></button></Link>
         </div>
         <div class="skills">
         <Link to ='/fb1'><button class="skillBtn"><h3 class="number">#10</h3></button></Link>
         </div>
         <div class="skills">
         <Link to ='/fb1'><button class="skillBtn"><h3 class="number">#11</h3></button></Link>
         </div>
         <div class="skills">
         <Link to ='/fb1'><button class="skillBtn"><h3 class="number">#12</h3></button></Link>
         </div>

     </div>
    );
};

export default skills;