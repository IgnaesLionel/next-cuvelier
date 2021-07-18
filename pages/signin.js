import React from "react";
import Head from "next/head";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";

const Signin = () => {
  return (
    <div>
      {" "}
      <Head>
        <title>Page de connexion</title>
      </Head>
      <h1>SignIn</h1>
      <h1>S’identifier</h1>
      <Form className="mx-auto my-4" style={{ maxWidth: "500px" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="votre email" />
          <Form.Text className="text-muted">
            We ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="votre mot de passe" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Connexion
        </Button>
        <p>Vous n{"'"}avez pas de compte ?</p>{" "}
        <Link href="/register">
          <a style={{ color: "crimson" }}>Inscrivez-vous</a>
        </Link>
      </Form>
    </div>
  );
};

export default Signin;
