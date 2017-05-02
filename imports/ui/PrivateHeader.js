import React from 'react';
import PropTypes from 'prop-types';
import { Accounts } from 'meteor/accounts-base';



const PrivateHeader = (props) =>{
  return (
         <div className="header">
          <div className="header__content">
            <p className="header__title">{props.title}</p>
            <button onClick={()=>Accounts.logout()} className="button--link-text"> sign out!</button>
          </div>
         </div>
        );
};


PrivateHeader.propTypes ={
  title:PropTypes.PropTypes.string.isRequired

};

export default  PrivateHeader;


// export default class PrivateHeader extends React.Component {
//     onLogout(){
//      Accounts.logout();
//     }
//
//   render() {
//      return (
//        <div>
//           <p>{this.props.title}</p>
//           <button onClick={this.onLogout.bind(this)}> sign out!</button>
//        </div>
//       );
//    }
// };
//
// PrivateHeader.propTypes ={
//   title:PropTypes.PropTypes.string.isRequired
//
// }
