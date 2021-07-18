import React from "react";
import { useState } from "react";
import { Row, Col, Button, Toast } from "react-bootstrap";

const ToastUp = ({ msg, handleShow, bgColor }) => {
  const handleShowTimer = () => {
    setTimeout(function () {
      handleShow();
    }, 3000);
  };

  console.log(handleShow);
  return (
    <div className="toasted">
      <Row>
        <Col xs={9}>
          <Toast className={bgColor} show="true" onClose={handleShowTimer()}>
            <Toast.Header closeButton={false}>
              <strong className="me-auto">{msg.title}</strong>
            </Toast.Header>
            <Toast.Body> {msg.msg} </Toast.Body>
          </Toast>
        </Col>
      </Row>
    </div>
  );
};

export default ToastUp;
