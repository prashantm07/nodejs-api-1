const express = require("express");
const userController = require("./../controller/userController");
const router = new express.Router();

router
  .route("/register")
  .post(userController.createUser);
 
  router
  .route("/")
  .get(userController.getAllUses);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
