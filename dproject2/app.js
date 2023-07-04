const express = require("express")
const Fruit = require("./controller/fruit")
const database = require("./config/database");
const dotenv = require("dotenv");
const app = express()


dotenv.config({ path: "./config/config.env" });
database()

app.get("/fruits",Fruit.Fuitedata);

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});