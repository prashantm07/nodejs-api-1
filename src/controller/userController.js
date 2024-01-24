const User = require("../model/User");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

exports.getAllUses = async (req, res) => {
  const getAllUser = await User.find();
  try {
    res.status(200).json({
      status: " Successful",
      All_Users: getAllUser,
    });
  } catch (error) {
    res.status(401).json({
      status: "Data not found",
    });
  }
};

exports.getUser = async (req, res) => {
  res.status(500).json({
    status: "Error",
    message: "This get user route is not yet implemented",
  });
};

// *******************************************************************************

const generateUsername = (firstName, lastName) => {
  // Logic to generate a username based on the first name and last name
  const specialCharacters = ["!", "@", "#", "$", "%", "&"]; // Add more special characters if needed
  const randomNumber = Math.floor(Math.random() * 999); // Generates a random number between 0 and 9

  const randomSpecialChar =
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  const username = `${firstName.toLowerCase()}${lastName.toLowerCase()}${randomSpecialChar}${randomNumber}`;

  return username;
};
// generate a password
function generatePassword(length = 8) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
}
// convert to hash
async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

exports.createUser = async (req, res) => {
  try {
     const { firstName, lastName, email, mobileNumber, role } = req.body;

    const geneartedUserName = generateUsername(firstName, lastName);
    const geneartedPassword = generatePassword();
    const generateAndHashPassword = await hashPassword(geneartedPassword);
    
    const newUser = new User({
      firstName,
      lastName,
      email,
      userName: geneartedUserName,
      password: generateAndHashPassword,
      mobileNumber,
      role,
    });
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(200).json({
        error: "failed",
        message: "Email already registered",
      });
    } else {
      await newUser.save();
      sendCredentils(newUser.email, newUser.userName, geneartedPassword);
      console.log(newUser.email, newUser.userName, geneartedPassword);
      res.status(201).json({
        message: "User registered successfully.. Check your email for login",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Registrastion Failed..!",
    });
  }
};

// sending credentilas through mail
function sendCredentils(email, userName, password) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "maneprashant096@gmail.com",
      pass: "dqbi frpt oyxo uemo",
    },
  });

  // mail content
  const mailOptions = {
    from: "maneprashant096@gmail.com",
    to: email,
    subject: "Credentials for Registration",
    text: `Your username is: ${userName}\nYour password is: ${password}\nPlease login.`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error + "mail not send ......");
    } else {
      console.log("Check your email ");
    }
  });
}

// *******************************************************************************

exports.updateUser = async (req, res) => {
  res.status(500).json({
    status: "Error",
    message: "This upadate route is not yet implemented",
  });
};
exports.deleteUser = async (req, res) => {
  res.status(500).json({
    status: "Error",
    message: "This delete route is not yet implemented",
  });
};
