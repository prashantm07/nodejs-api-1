const express = require("express");
const mensControllers = require('../controller/mensController');
const router = new express.Router();

// router.param('id', mensControllers.checkID); 

router
.route('/')
.get(mensControllers.getAll)
.post(mensControllers.addNewRecord);

router
  .route("/:id")
  .get(mensControllers.getById)
  .put(mensControllers.updateRecord)
  .delete(mensControllers.deleteRecord);

  module.exports = router;
