import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
//Redux
import { Provider } from 'react-redux';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'

//Views
import Login from './views/Pages/Login/'
import Register from './views/Pages/Register/'

// Containers
import Full from './containers/Full/'

ReactDOM.render((
  <HashRouter>
    <Switch>
        <Route exact path="/login" name="Login Page" component={Login}/>
        <Route exact path="/register" name="Register Page" component={Register}/>
        <Route path="/" name="Home" component={Full}/>
    </Switch>
  </HashRouter>
), document.getElementById('root'));
