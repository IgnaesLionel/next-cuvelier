import React from "react";
import { useState } from "react";
import { Row, Col, Button, Toast } from "react-bootstrap";
import Image from "next/image";

const ToastUp = ({ msg, handleShow, bgColor }) => {
  const [show, setShow] = useState(false);

  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            {/* <Image
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            /> */}
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>you re reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </Col>
    </Row>
  );
};

export default ToastUp;
