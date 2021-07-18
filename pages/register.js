import React from "react";
import Head from "next/head";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";
import { useState, useContext, useEffect, useRef } from "react";
import valid from "../utils/valid";
import { DataContext } from "../store/GlobalState";

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const nameInput = useRef(null);
  const lastNameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const controlPasswordInput = useRef(null);

  const dataToSend = { name, lastname, email, password, controlPassword };

  const { state, dispatch } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errMsg = valid(name, lastname, email, password, controlPassword);
    if (errMsg) {
      return dispatch({ type: "NOTIFY", payload: { error: errMsg } });
    }
  };

  return (
    <div>
      <Head>
        <title>Page d{"'"}inscription</title>
      </Head>
      <h1>test</h1>
      <h1>S’inscrire</h1>
      <Form
        className="mx-auto my-4"
        style={{ maxWidth: "500px" }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            value={name}
            type="text"
            ref={nameInput}
            onChange={(e) => setName(nameInput.current.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            type="text"
            value={lastname}
            ref={lastNameInput}
            onChange={(e) => setLastName(lastNameInput.current.value)}
          />
          <Form.Text className="text-muted" id="lastname"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            ref={emailInput}
            value={email}
            onChange={(e) => setEmail(emailInput.current.value)}
          />
          <Form.Text className="text-muted">
            Nous ne partagerons pas votre email, d{"'"}aucune manière.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe (6 caractères minimum)</Form.Label>
          <Form.Control
            type="password"
            value={password}
            ref={passwordInput}
            onChange={(e) => setPassword(passwordInput.current.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicControlPassword">
          <Form.Label>Confirmation du mot de passe</Form.Label>
          <Form.Control
            type="password"
            value={controlPassword}
            ref={controlPasswordInput}
            onChange={(e) =>
              setControlPassword(controlPasswordInput.current.value)
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Connexion
        </Button>
        <p> Vous avez déja un compte ?</p>
        <Link href="/signin">
          <a style={{ color: "crimson" }}>Connectez-vous</a>
        </Link>
      </Form>
    </div>
  );
};

export default Register;
