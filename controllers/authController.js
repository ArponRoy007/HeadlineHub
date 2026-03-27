const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// SIGNUP
exports.signup = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) return res.send("User already exists");

  const hashed = await bcrypt.hash(password, 10);

  await User.create({ email, password: hashed });

  res.redirect("/login");
};

// LOGIN
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.send("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.send("Wrong password");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token, {
    httpOnly: true
  });

  res.redirect("/");
};

// LOGOUT
exports.logout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
};