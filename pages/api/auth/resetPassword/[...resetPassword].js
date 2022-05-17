import { postData } from "../../../../utils/fetchData";
import jwt from "jsonwebtoken";
import Cookie from "js-cookie";
import {
  createAccessToken,
  createRefreshToken,
} from "../../../../utils/generateToken";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await resetPassword(req, res);
      break;
  }
};

const resetPassword = async (req, res) => {
  const { resetPassword } = req.query;

  // check si l'id existe
  const resId = await postData("auth/passwordRecovery2", resetPassword[0]);
  // renvoie le password

  //check si le token+psw reçu en params est le même que celui de l'user et du env
  const secret = process.env.ACCESS_TOKEN_SECRET + resId.user.password;

  try {
    const result = jwt.verify(resetPassword[1], secret);
    if (!result)
      return res
        .status(400)
        .json({ err: "Votre token est incorrect ou a expiré." });

    const access_token = createAccessToken({ id: resId.user._id });
    const refresh_token = createRefreshToken({ id: resId.user._id });

    res.json({
      msg: "Connection réussi!",
      refresh_token,
      access_token,
      user: {
        name: resId.user.name,
        email: resId.user.email,
        role: resId.user.role,
        avatar: resId.user.avatar,
        root: resId.user.root,
      },
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

/* try {
    const { name, lastname, email, password, cf_password } = req.body;

    const errMsg = valid(name, lastname, email, password, cf_password);
    if (errMsg) return res.status(400).json({ err: errMsg });

    const user = await Users.findOne({ email });consoi
    if (user)
      return res.status(400).json({ err: "This email already exists." });

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = new Users({
      name,
      lastname,
      email,
      password: passwordHash,
      cf_password,
    });

    await newUser.save();
    res.json({ msg: "Register Success!" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  } */
