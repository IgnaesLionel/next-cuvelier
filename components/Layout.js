import React from "react";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";
import Notify from "./Notify";

const Layout = ({ children }) => {
  return (
    <Container>
      <NavBar />
      <Notify />
      {children}
    </Container>
  );
};

export default Layout;
