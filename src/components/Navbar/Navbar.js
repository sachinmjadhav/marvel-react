import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Nav() {
  return (
    <Navbar className="navbar" dark expand="md">
      <NavbarBrand href="/" className="mx-auto brand">
        <img src={logo} alt="" className="img" />
      </NavbarBrand>
    </Navbar>
  );
}

export default Nav;
