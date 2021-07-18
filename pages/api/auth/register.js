import connectDB from "../../../utils/connectDB";
import Users from "../../../models/userModel";
import valid from "../../../utils/valid";
import bcrypt from "bcrypt";

connectDB();

const handleRequest = async (req, res) => {
  switch (req.method) {
    case "POST":
      await register(req, res);
      break;
  }
};

const register = async (req, res) => {
  try {
    const { name, lastname, email, password, controlPassword } = req.body;

    // check si il y'as une erreur
    const errMsg = valid(name, lastname, email, password, controlPassword);
    if (errMsg) return res.status(400).json({ err: errMsg });

    // Confirmation !Doublon
    const user = await Users.findOne({ email });
    if (user)
      return res.status(400).json({ err: "cette email est déja enregistré." });

    const passwordHash = await bcrypt.hash(password, 12);

    // Envoye d'un nouvelle utilisateur à la BDD
    const newUser = new Users({
      name,
      lastname,
      email,
      password: passwordHash,
      controlPassword,
    });

    await newUser.save();
    res.json({ msg: "Enregistrement réussi !" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

export default handleRequest;
