import React from 'react';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';

export default ()=>{
  return (
    <div >
       <PrivateHeader title='Links'/>
        <div className="page-content">
             <LinksList/>
             <AddLink/>
        </div>     
    </div>

  );
}

// export default class Link extends React.Component {
//
//
//   render() {
//
//     return (
//
//       <div >
//         <PrivateHeader title='Links'/>
//         <LinksList/>
//         <AddLink/>
//       </div>
//     );
//   }
// };
