import connectDB from "../../../utils/connectDB";
import Users from "../../../models/userModel";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await login(req, res);
      break;
  }
};

const login = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await Users.findOne({ email });
    if (!user)
      return res.status(400).json({ err: "Cette utilisateur n'existe pas." });

    res.json({
      msg: "Connection réussi!",
      user: {
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role,
        avatar: user.avatar,
        root: user.root,
        id: user.id,
      },
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
