import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState, useRef, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Form, Button } from "react-bootstrap";
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData";
import Cookie from "js-cookie";

const Signin = () => {
  // Data from input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const dataToSend = { email, password };

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
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    const res = await postData("auth/login", dataToSend);

    //error to notify -> Toast
    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });
    dispatch({ type: "NOTIFY", payload: { success: res.msg } });

    //Context Auth
    dispatch({
      type: "AUTH",
      payload: {
        token: res.access_token,
        user: res.user,
      },
    });

    //Cookie Auth
    Cookie.set("refreshtoken", res.refresh_token, {
      path: "api/auth/accessToken",
      expires: 7,
    });

    //Local Auth
    localStorage.setItem("firstLogin", true);
  };

  return (
    <div>
      {" "}
      <Head>
        <title>Page de connexion</title>
      </Head>
      <h1>SignIn</h1>
      <h1>S’identifier</h1>
      <Form
        className="mx-auto my-4"
        style={{ maxWidth: "500px" }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            ref={emailInput}
            value={email}
            onChange={(e) => setEmail(emailInput.current.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            value={password}
            ref={passwordInput}
            onChange={(e) => setPassword(passwordInput.current.value)}
            placeholder="votre mot de passe"
          />
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
