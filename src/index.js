import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/Homepage/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup/signup';
import Avatar from './components/Avatar/avatar';
import Choose from './components/ChooseSports/choosesports';
import studentDash from './components/Studentdash/dashboard';
import skills from './components/Skills/Football/skillspage';
import tennisskill from './components/Skills/Tennis/tennis';
import basketball from './components/Skills/Basketball/basketball';
import ftballone from './components/Uploadpages/upload';


ReactDOM.render(
    <BrowserRouter>
    <Switch>
     <Route exact path='/' component={App}/>
     <Route exact path='/signup' component={Signup}/>
     <Route exact path='/avatar' component={Avatar}/>
     <Route exact path='/choosesports' component={Choose}/>
     <Route exact path='/dash' component={studentDash}/>
     <Route exact path='/Footballskill' component={skills}/>
     <Route exact path='/Tennis' component={tennisskill}/>
    <Route exact path='/Basketball' component={basketball}/>
    <Route exact path='/fb1' component={ftballone}/>
     </Switch>
    </BrowserRouter >,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// ReactDOM.render(<App />, document.querySelector('#root')) */
