import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
const Toast = ({ msg, handleShow, bgColor }) => {
  function Example() {
    const [show, setShow] = useState(false);

    return (
      <Row>
        <Col xs={6}>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <Image
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you re reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={() => setShow(true)}>Show Toast</Button>
        </Col>
      </Row>
    );
  }

  return (
    <div>
      <Example />
    </div>
  );
};

export default Toast;
