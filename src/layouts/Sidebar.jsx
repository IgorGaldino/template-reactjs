import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTachometerAlt,
  faQuestion,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SubMenu from "../components/SubMenu";

const submenus = [
  {
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    title: "Perfil",
    path: "/profile",
  },
  {
    title: "Sobre",
    path: "/about",
  },
];

const SideBar = ({ isOpen }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>Template</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        {/* <p>Dummy Heading</p> */}
        <SubMenu title="Home" icon={faHome} items={submenus} />
        <NavItem>
          <NavLink tag={Link} to="/Dashboard">
            <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/profile">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/about">
            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            About
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

export default SideBar;
