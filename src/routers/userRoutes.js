const express = require("express");
const userController = require('./../controller/userController');
const router = new express.Router();

router
.route("/")
.get(userController.getAllUses)
.post(userController.createUser);

router
.route("/:id")
.get(userController.getUser)
.patch(userController.updateUser)
.delete(userController.deleteUser);

module.exports = router;    