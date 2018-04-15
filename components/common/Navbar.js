// import {
//   Navbar,
//   NavItem,
//   Nav,
//   MenuItem,
//   NavDropdown,
//   Image
// } from "react-bootstrap";
// import Link from "./Link";

// export default props => {
//   const name = props.name ? props.name : "pick a name";
//   return (
//     <Navbar style={props.style}>
//       <Navbar.Header>
//         <Navbar.Brand>
//           <span className={props.classNameImage}>
//             <img src={props.images} width="20" height="20" />
//           </span>

//           <a
//             className={props.classNameBrandName}
//             href={props.linkBrand}
//             style={props.styleBrandName}
//           >
//             {props.brandname}
//           </a>
//         </Navbar.Brand>
//         <div style={{ float: "right" }}>{props.drawer}</div>
//         <div
//           style={{
//             visibility: "hidden",
//             display: "none"
//           }}
//         >
//           <Navbar.Toggle />
//         </div>
//       </Navbar.Header>
//       <Navbar.Collapse>
//         <Nav style={props.styleNav}>
//           <NavItem href={props.link1}>
//             <span className={props.className}>{props.linkName1}</span>
//           </NavItem>

//           <NavItem href={props.link2}>
//             <span className={props.className}>{props.linkName2}</span>
//           </NavItem>
//           <NavItem href={props.link3}>
//             <span className={props.className}>{props.linkName3}</span>
//           </NavItem>
//           <NavItem href={props.link4}>
//             <span className={props.className}>{props.linkName4}</span>
//           </NavItem>
//           <NavItem href={props.link5}>
//             <span className={props.className}>{props.linkName5}</span>
//           </NavItem>

//           {props.dropdown}
//         </Nav>
//       </Navbar.Collapse>
//       <style jsx>{`
//         .brandName {
//           color: #3d3d3d;
//           font-size: 14px;
//           font-family: Roboto;
//         }
//         .brandName:hover {
//           color: #00aecc;
//         }
//         .description:hover {
//           color: #00aecc;
//         }
//         .description {
//           color: #3d3d3d;
//           font-size: 9px;
//           font-family: Roboto;
//         }

//         .image {
//           margin-right: 5px;
//         }
//       `}</style>
//     </Navbar>
//   );
// };
