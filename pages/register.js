import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState, useContext, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { Form, Button } from "react-bootstrap";
import valid from "../utils/valid";
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData";

const Register = () => {
  // Data from input
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

  //context & actions reducers
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  //Routing
  const router = useRouter();
  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push("/");
  }, [auth]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMsg = valid(name, lastname, email, password, controlPassword);
    //error to notify -> Toast
    if (errMsg) return dispatch({ type: "NOTIFY", payload: { error: errMsg } });

    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("auth/register", dataToSend);
    if (res.err)
      //error to notify -> Toast
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });
    //success to notify -> Toast
    return dispatch({ type: "NOTIFY", payload: { success: res.msg } });
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

        <Button variant="primary" type="submit">
          Inscription
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
