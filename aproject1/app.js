const express = require("express")
const app  = express()
const bodyParser = require("body-parser");

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

// routes
const User = require("./Routes/user")

app.use("/",User)

module.exports= app;