const express = require("express");
const studentsControllers = require('../controller/studentController');
const router = new express.Router();

// router.param('id', mensControllers.checkID); 

router
.route('/')
.get(studentsControllers.getAll)
.post(studentsControllers.addNewRecord);

router
  .route("/:id")
  .get(studentsControllers.getById)
  .put(studentsControllers.updateRecord)
  .delete(studentsControllers.deleteRecord);

  module.exports = router;