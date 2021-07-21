import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { useRouter } from "next/router";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Container, NavDropdown, Nav, Button } from "react-bootstrap";
import classes from "./NavBar.module.css";
import { DataContext } from "../store/GlobalState";
import Cookie from "js-cookie";

const NavBar = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const { auth, cart } = state;
  const isActive = (r) => {
    if (r === router.pathname) {
      return classes.activeBtn;
    } else {
      return null;
    }
  };

  const handleLogout = () => {
    Cookie.remove("refreshtoken", { path: "api/auth/accessToken" });
    localStorage.removeItem("firstLogin");
    dispatch({ type: "AUTH", payload: {} });
    dispatch({ type: "NOTIFY", payload: { success: "Déconnecté!" } });
    return router.push("/");
  };

  const adminRouter = () => {
    return (
      <>
        <NavDropdown title="admin" id="collasible-nav-dropdown">
          <Link href="/users">
            <NavDropdown.Item href="/users">Utilisateur</NavDropdown.Item>
          </Link>
          <NavDropdown.Divider />
          <Link href="/create">
            <NavDropdown.Item href="/create">Produits</NavDropdown.Item>
          </Link>
          <NavDropdown.Divider />
          <Link href="/categories">
            <NavDropdown.Item href="/categories">Categories</NavDropdown.Item>
          </Link>
        </NavDropdown>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <NavDropdown
        title={
          <div className="d1">
            <Image
              width={30}
              height={30}
              src={auth.user.avatar}
              alt={auth.user.avatar}
              style={{
                borderRadius: "50%",

                transform: "translateY(-3px)",
                marginRight: "3px",
              }}
            />
            {auth.user.name} {auth.user.lastname}
          </div>
        }
      >
        <Link href="/profile">
          <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
        </Link>
        {auth.user.role === "admin" && adminRouter()}
        <NavDropdown.Divider />
        <NavDropdown.Item>
          <Button onClick={handleLogout}>Logout</Button>
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <div className="dropdown-divider"></div>
        </div>
      </NavDropdown>
    );
  };

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
                  <span
                    className="position-absolute"
                    style={{
                      padding: "3px 6px",
                      background: "#ed143dc2",
                      borderRadius: "50%",

                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    {cart.length}
                  </span>
                </div>
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>

        {Object.keys(auth).length === 0 ? (
          <Link href="/signin">
            <Nav.Link href="/signin" active>
              <div className={isActive("/signin")}>
                <FontAwesomeIcon className="menu-icons" icon={faUser} />
                Se connecter
              </div>
            </Nav.Link>
          </Link>
        ) : (
          loggedRouter()
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
