import { Meteor } from 'meteor/meteor';
import '../imports/api/users';
import {Links} from '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {


  // const petSchema = new SimpleSchema({
  //   name:{
  //     type:String,
  //     min:1,
  //     max:10,
  //     optional:true
  //   }
  //   age:{
  //     type:number,
  //     min:0
  //   }
  //   contactNumber:{
  //     type:string,
  //     optional:true,
  //     regEx:SimpleSchema.regEx.Phone
  //   }
  // });
  //
  // petSchema.validate({
  //   name:'12345678901'
  // })

});
