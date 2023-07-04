const dotenv = require("dotenv")
const database = require("./config/database")
dotenv.config({path:"./config/config.env"})
const app = require("./app")

database()

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
