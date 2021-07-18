import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const router = useRouter();
  const isActive = (r) => {
    if (r === router.pathname) {
      return classes.activeBtn;
    } else {
      return null;
    }
  };

  const testActive = classes.activeBtn;

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
      <Container>
        <Link href="/">
          <Navbar.Brand>Sas Cuvelier</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>

          <Nav>
            <Link href="/cart">
              <Nav.Link href="/cart">
                <div className={isActive("/cart")}>
                  <FontAwesomeIcon
                    className="menu-icons"
                    icon={faShoppingCart}
                  />
                  Panier
                </div>
              </Nav.Link>
            </Link>
            <Link href="/signin">
              <Nav.Link href="/signin" active>
                <div className={isActive("/signin")}>
                  <FontAwesomeIcon className="menu-icons" icon={faUser} />
                  Mon compte
                </div>
              </Nav.Link>
            </Link>
            {/* <NavDropdown title="Utilisateur" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
            </NavDropdown>

  */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
