import Users from "../model/users.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/index.js";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await Users.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        error: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Users.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    if (error.name === "validationError") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });

    if (!user || !(await user.matchPasswords(password))) {
      return res.status(401).json({
        error: "Invalid Login Credentials",
      });
    }

    const token = await generateToken(user._id)
    res.status(200).json({
        _id: user._id,
        email: user.email,
        token,
    });
  } catch (error) {
    res.status(500).json({error: "Internal server error"})
  }
};

export default { registerUser, loginUser };
