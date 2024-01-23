const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const userScema = new mongoose.Schema({
  userName: {
    type: "String",
    // required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: "String",
    required: true,
    undefined: true,
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  role:{
    type: "String",
    enum : ['user', 'admin'],
    default : 'user'

  }
,  password: {
    type: "String",
    required: [true, "Please provide a password"],
  },
  passwordConfirmation: {
    type: "String",
    required: [true, "Please confirm a password"],
    validate: {
      // this is only work on CREATE and SAVE!!
      validator: function (pass) {
        return pass === this.password;
      },
      message: "password not same..!!",
    },
  },
});

userScema.pre("save", function (next) {
  if (this.isModified("password")) return next();
});

const User = new mongoose.model("User", userScema);
module.exports = User;
