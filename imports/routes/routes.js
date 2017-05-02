import { Meteor } from 'meteor/meteor';

import React from 'react';
import { Router, Route,Switch} from 'react-router-dom';
//import createBrowserHistory from 'history/createBrowserHistory';

import { createBrowserHistory } from 'history';

import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

// Create and import basic version of Login
// Create the route for "/" and render Login
const unauthenticatedPages=['/','/signup'];

const authenticatedPages=['/links'];

const history=createBrowserHistory();

const onEnterPublicPage = ()=>{
  console.log('onEnterPublicPage' );
 if (Meteor.userId()) {
    history.replace('/links')
  }
};

const onEnterPrivatePage = ()=>{
  console.log('onEnterPrivatePage' );
  if (!Meteor.userId()) {
      history.replace('/')
  }
};

export const onAuthChange= (isAuthenticated)=>{
  const pathName = history.location.pathname;

  const isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
  const isAuthenticatedPage = authenticatedPages.includes(pathName);


  if( isUnauthenticatedPage && isAuthenticated ){
    history.replace('/links')
  } else if (isAuthenticatedPage && !isAuthenticated){
    history.replace('/')
  }

  console.log('isAuthenticated ',isAuthenticated)
  console.log('isUnauthenticatedPage ',isUnauthenticatedPage)
  console.log('pathName ',pathName)


};



export const routes = (

    <Router history={history}>
      <Switch>
        <Route   exact path="/" component={Login} onEnter = {onEnterPublicPage()}/>
        <Route   path="/signup" component={Signup} onEnter = {onEnterPublicPage()}/>
        <Route   path="/links" component={Link} onEnter = {onEnterPrivatePage()}/>
        <Route  component={NotFound}/>
      </Switch>
    </Router>



)
