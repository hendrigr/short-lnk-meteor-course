import React from 'react';
import {Links} from '../api/links';

export default class Link extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      links:[]
    };

  };


  componentDidMount() {
    console.log('componentDidMount LinksList');
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('links');
      const links = Links.find().fetch();
      this.setState({ links });
    });
  }
  componentWillUnmount() {
    console.log('componentWillUnmount LinksList');
    this.linksTracker.stop();
  }


  renderLinksList() {
     if(this.state.links.length===0){
       return(
         <div className="item">
          <p className="item__status-message">No Links Found</p>
         </div>
       )
     }
      return this.state.links.map((item) => {
        return(
         <div key={item._id} className="item">
          <h2>{item.url} </h2>
          <a href={item.url} target="_blank">visit</a>
          </div>
        );
      });

  }

  render(){
    return(
      <div>
      {this.renderLinksList()}
      </div>
    )
  }
}
