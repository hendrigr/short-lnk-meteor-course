import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import {Session} from 'meteor/session';

import { routes, onAuthChange } from '../imports/routes/routes';
import '../imports/startup/simple-schema-configuration.js';


Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Tracker.autorun(() => {
  const name = Session.get('name');
  console.log('name ', name);
});

Meteor.startup(() => {


  // Meteor.call('calculateNumber',1,2,(err,result)=>{
  //   console.log('calculateNumber',err,result);
  // });

  ReactDOM.render(routes, document.getElementById('app'));
});
