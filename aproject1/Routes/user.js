const express = require("express")
const router = express.Router()
const User = require("../controller/user")

// register
router.post("/register", User.registerUser);
router.post("/login", User.loginUser);

module.exports= router