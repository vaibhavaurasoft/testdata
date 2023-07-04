const User = require("../schema/usermodel");
const Trycatch = require("../middleware/trycatch");

const registerUser = Trycatch(async (req, res) => {
  const { username, password } = req.body;

  // Check if username already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: "Username already exists" });
  }

  // Create a new user
  const newUser = new User({ username, password });
  await newUser.save();

  res.status(201).json({ message: "User registered successfully" });
});

// Controller for user login
const loginUser = Trycatch(async (req, res) => {
  const { username, password } = req.body;
 
  // Check if username exists
  const existingUser = await User.findOne({ username });
  if (!existingUser) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

    // // Check if password is correct
    // const isPasswordValid = await existingUser.comparePassword(password);
    // if (!isPasswordValid) {
    //   return res.status(401).json({ message: "Invalid username or password" });
    // }

  // Compare passwords
  const passMatch = await existingUser.comparePassword(password);
  if (!passMatch) {
    return res.status(500).json({ error: "Invalid Password" });
  }

  res.status(200).json({ message: "User logged in successfully" });
});

module.exports = { registerUser, loginUser };
