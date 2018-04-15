// import React, { Component } from "react";
// import Drawer from "material-ui/Drawer";
// import Button from "material-ui/Button";
// import List from "material-ui/List";
// import Divider from "material-ui/Divider";
// import MenuIcon from "material-ui-icons/Menu";
// import ListDrawer from "../ListDrawer";

// class LeftSideNavBar extends Component {
//   state = {
//     left: false
//   };

//   toggleDrawer = (side, open) => () => {
//     this.setState({
//       [side]: open
//     });
//   };
//   render() {
//     const { colorButtonToggle } = this.props;
//     const { drawerWidth } = this.props;
//     const { backgroundColorDrawer } = this.props;

//     return (
//       <div>
//         <span className="colorButton">
//           <Button
//             onClick={this.toggleDrawer("left", true)}
//             style={{ color: colorButtonToggle }}
//           >
//             <MenuIcon />
//           </Button>
//         </span>

//         <Drawer
//           open={this.state.left}
//           onClose={this.toggleDrawer("left", false)}
//         >
//           <div
//             style={{
//               width: drawerWidth,
//               backgroundColor: backgroundColorDrawer
//             }}
//             tabIndex={0}
//             role="button"
//             onClick={this.toggleDrawer("left", false)}
//             onKeyDown={this.toggleDrawer("left", false)}
//           >
//             {this.props.listDrawer ? (
//               this.props.listDrawer
//             ) : (
//               <h1>need list drawer</h1>
//             )}
//           </div>
//         </Drawer>
//       </div>
//     );
//   }
// }
// export default LeftSideNavBar;
