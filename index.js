import React from 'react';
import ReactDOM from 'react-dom';
import './src/index.css';
import App from './src/components/Homepage/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './src/serviceWorker';
import Signup from './src/components/Signup/signup';
import Avatar from './src/components/Avatar/avatar';
import Choose from './src/components/ChooseSports/choosesports';
import studentDash from './src/components/Studentdash/dashboard';


ReactDOM.render(
    <BrowserRouter>
    <Switch>
     <Route exact path='/' component={App}/>
     <Route exact path='/signup' component={Signup}/>
     <Route exact path='/avatar' component={Avatar}/>
     <Route exact path='/choosesports' component={Choose}/>
     <Route exact path='/dash' component={studentDash}/>
     </Switch>
    </BrowserRouter >,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// ReactDOM.render(<App />, document.querySelector('#root')) */
