const mongoose = require("mongoose");
const bcryptJS = require("bcrypt")
const Usersschema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9]{6,12}$/,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 255,
  },
});

// password hashing
Usersschema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcryptJS.hash(this.password, 10);
});


// compare password
Usersschema.methods.comparePassword = async function (enterpassword) {
  return await bcryptJS.compare(enterpassword, this.password);
};


const User = mongoose.model("User", Usersschema);

module.exports = User;
