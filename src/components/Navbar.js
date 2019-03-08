import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function Nav() {
  return (
    <nav>
      <Navbar color="danger" dark expand="md">
        <NavbarBrand href="/" style={{ fontSize: "2rem" }}>
          MARVEL
        </NavbarBrand>
      </Navbar>
    </nav>
  );
}

export default Nav;
