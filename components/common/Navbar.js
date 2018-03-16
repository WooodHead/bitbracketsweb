import { Navbar, NavItem, Nav, MenuItem, NavDropdown } from "react-bootstrap";
import Link from "./Link";

export default props => {
  const name = props.name ? props.name : "pick a name";
  return (
    <Navbar style={props.style}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home" style={props.styleBrandName}>
            {props.brandname}
          </a>
        </Navbar.Brand>
        <div style={{ float: "right" }}>{props.drawer}</div>
        <div
          style={{
            visibility: "hidden",
            display: "none"
          }}
        >
          <Navbar.Toggle />
        </div>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav style={props.styleNav}>
          <NavItem href="#">
            <span className={props.className}>{props.link1}</span>
          </NavItem>

          <NavItem href="#">
            <span className={props.className}>{props.link2}</span>
          </NavItem>
          <NavItem href="#">
            <span className={props.className}>{props.link3}</span>
          </NavItem>
          <NavItem href="#">
            <span className={props.className}>{props.link4}</span>
          </NavItem>

          {props.dropdown}
        </Nav>
      </Navbar.Collapse>
      <style jsx>{`
         
         .description:hover {
          color: #3ffeca;
        }
        .description{
          color: #fff;
          font-size: 9px;
        }
        .description1:hover {
          color: #067df7;
        }
        .description1{
          color:  #fff;
          font-size: 9px;
        }
        
          }
        `}</style>
    </Navbar>
  );
};
