const User = require("../model/User");

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
  const username = `${firstName.toLowerCase()}_${lastName.toLowerCase()}`;
  return username;
};

exports.createUser = async (req, res) => {
  try {
    // const newUser = new User(req.body);
    // const user_id = req.body.email;

    const { firstName, lastName, email, password, passwordConfirmation, role } =
      req.body;

    const geneartedUserName = generateUsername(firstName, lastName);
console.log(geneartedUserName)
    const newUser = new User({
      firstName,
      lastName,
      email,
      userName: geneartedUserName,
      password,
      passwordConfirmation,
      role,
    });
    console.log(newUser)
    const existingUser = await User.findOne({ email });
    console.log(existingUser,"***");
    if (existingUser) {
      res.status(200).json({
        error: "failed",
        message: "Email already exists",
      });
    } else {
      console.log(newUser)
      await newUser.save();
      res.status(201).json({
        message: "User registered successfully",
      });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: error,
    });
  }
};

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
