import Head from "next/head";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";

//send email with link --> resetpassword page

const Signin = () => {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { email } = userData;

  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: "NOTIFY", payload: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    //user existe ?
    const res = await postData("auth/passwordRecovery", userData);
    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });
    dispatch({ type: "NOTIFY", payload: { success: res.msg } });

    const secret = process.env.ACCESS_TOKEN_SECRET + res.user.password;
    const payload = { email: res.user.email };
    const token = jwt.sign(payload, secret, { expiresIn: "15m" });
    const link = `${process.env.BASE_URL}/recoverPassword/${res.user.id}/${token}`;

    //send email with link --> resetpassword page
    console.log(link);
  };

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push("/");
  }, [auth]);

  return (
    <div style={{ minHeight: "80vh" }}>
      <Head>
        <title>Récupération de mot de passe</title>
      </Head>

      <form
        className="mx-auto my-4"
        style={{ maxWidth: "500px" }}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Votre adresse E-mail</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Login
        </button>

        <p className="my-2">
          Vous n'avez pas encore de compte ?{" "}
          <Link href="/register">
            <a style={{ color: "crimson" }}>Enregistrez-vous</a>
          </Link>
        </p>

        <p className="my-2">
          Vous avez déja un compte ?{" "}
          <Link href="/signin">
            <a style={{ color: "crimson" }}>Connectez-vous</a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
