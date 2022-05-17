import React, { useState } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { getData } from "../../utils/fetchData";

const Post = () => {
  const router = useRouter();
  const [cookie, setCookie] = useState(false);

  const { recoverPassword } = router.query;

  const handleClick = async () => {
    const res = await getData(
      `auth/resetPassword/${recoverPassword[0]}/${recoverPassword[1]}`
    );

    Cookie.set("resetPassword", res.refresh_token, {
      path: "api/auth/accessToken",
    });

    localStorage.setItem("resetPassword", true);

    if (Cookie.get("resetPassword") !== undefined) {
      setCookie(true);
    }
  };

  return (
    <p>
      <button onClick={handleClick}>modifier mon mot de passe </button>
      {cookie ? (
        <input
          type="text"
          className="form-control"
          id="newPassword"
          name="newPassword"
        />
      ) : (
        "désolé y'en as pas pour toi"
      )}
    </p>
  );
};

export default Post;
