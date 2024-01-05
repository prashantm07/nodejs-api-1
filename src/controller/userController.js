const User = require('../model/User');

exports.getAllUses = async (req, res)=>{
    res.status(500).json({
      status : 'Error',
      message : "This get all users route is not yet implemented"
    })
  }
  
  exports.getUser = async (req, res)=>{
    res.status(500).json({
      status : 'Error',
      message : "This get user route is not yet implemented"
    })
  }
  exports.createUser = async (req, res)=>{
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
  }
  exports.updateUser = async (req, res)=>{
    res.status(500).json({
      status : 'Error',
      message : "This upadate route is not yet implemented"
    })
  }
  exports.deleteUser = async (req, res)=>{
    res.status(500).json({
      status : 'Error',
      message : "This delete route is not yet implemented"
    })
  }