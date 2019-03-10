import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Nav() {
  return (
    <nav>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" className="mx-auto brand">
          <img src={logo} alt="" className="img" />
        </NavbarBrand>
      </Navbar>
    </nav>
  );
}

export default Nav;
