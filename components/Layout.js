import React from "react";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";
/* import Notify from "./Notify"; */
import ToastUp from "./ToastUp";

const Layout = ({ children }) => {
  return (
    <Container>
      <NavBar />
      <ToastUp />
      <ToastUp />
      <ToastUp />
      <ToastUp />
      <ToastUp />
      {children}
    </Container>
  );
};

export default Layout;
