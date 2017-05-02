import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer){
  Meteor.publish('links',function (){
    return Links.find({userId: this.userId});
  })
}

Meteor.methods({
  'links.insert'(url){
    if(!this.userId){
      throw new Meteor.Error('not-authorized');
    }
      new SimpleSchema({
         url:{
          type:String,
          label:'Your Link ',
          regEx:SimpleSchema.RegEx.Url
         }
       }).validate({url})

    Links.insert({
      url,
      userId:this.userId
    });
  }

  // calculateNumber(num1,num2){
  //   console.log('calculateNumber run');
  //   if(typeof num1=== 'number' && typeof num2=== 'number'){
  //      return num1+num2;
  //   }else {
  //     throw new Meteor.Error('invalid argument', 'should number');
  //   }
  // }
})
