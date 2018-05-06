import React, { Component } from 'react';

import NavigationResponsive from './NavigationResponsive';
import FirstNavbar from './FirstNavbar';

function Navigation(props) {
  return (
    <div>
      <div className="navbarResponsive">
        <NavigationResponsive />
      </div>
      <div className="navbar">
        <FirstNavbar />
        {/* <FirstNavbar languageSelect={this.languageSelect} /> */}
      </div>

      <style jsx>
        {`
          @media (max-width: 425px) {
            .navbar {
              visibility: hidden;
              display: none;
            }
          }
          @media (min-width: 426px) {
            .navbarResponsive {
              visibility: hidden;
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
}
export default Navigation;
// class Navigation extends Component {
//   render() {
//     return (
//       <div>
//         <div className="navbarResponsive">
//           <NavigationResponsive />
//         </div>
//         <div className="navbar">
//           <FirstNavbar languageSelect={this.props.languageSelect} />
//         </div>

//         <style jsx>
//           {`
//             @media (max-width: 425px) {
//               .navbar {
//                 visibility: hidden;
//                 display: none;
//               }
//             }
//             @media (min-width: 426px) {
//               .navbarResponsive {
//                 visibility: hidden;
//                 display: none;
//               }
//             }
//           `}
//         </style>
//       </div>
//     );
//   }
// }

//
