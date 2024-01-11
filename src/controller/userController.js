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
exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const InsertUser = await newUser.save();
    res.status(201).json({
      status: "success",
      data: {
        User: InsertUser,
      },
    });
  } catch (error) {
    res.status(401).send(error);
  }
};
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
