const studentsData = require("../model/students");

exports.getAll = async (req, res) => {
  try {
    const getStudents = await studentsData.find({}).sort({ ranking: 1 });
    if (!getStudents || getStudents.length === 0) {
      return res.status(404).json({
        status: `Not found`,
        message: `Student Data Not Found`
      });
    }
    res.status(200).send(getStudents);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.getById = async (req, res) => {
  const student_id = req.params.id;
  console.log(student_id)
  try {
    const getStudents = await studentsData.findOne({student_id: student_id});
    if (!getStudents) {
      return res.status(404).json({
        status: `Not found`,
        message: `${student_id} is not a record`
      });
    }
    res.send(getStudents);
  } catch (error) {
    res.status(400).json({
      error: 'Id not found',
    })
  }
};

exports.addNewRecord = async (req, res) => {
  try {
    // const addingStudentsRecords = new studentsData(req.body);
    // const insertStudent = await addingStudentsRecords.save();
    
    const insertStudent = await studentsData.create(req.body);
    res.status(201).json({
      Status : "New record added successfully..!",
      insertStudent : insertStudent
    })
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.updateRecord = async (req, res) => {
  const student_id = req.params.id;
  try {
    const updateStudent = await studentsData.findOneAndUpdate({student_id : student_id}, req.body, {
      new: true,
    });
    if (!updateStudent) {
      return res.status(404).json({
        status: `Not found`,
        message: `${student_id} is not a record`
      });
    }
    res.send(updateStudent);
  } catch (error) {
    res.status(500).send("id not found : " + _id);
  }
};

exports.deleteRecord = async (req, res) => {
  const student_id = req.params.id;
  console.log(student_id)
  try {
    const DeleteRecord = await studentsData.findOneAndDelete({student_id : student_id});
    if (!DeleteRecord) {
      return res.status(404).json({
        status: `Not found`,
        message: `${student_id} is not a record`
      });
    }
    res.status(200).json({
      status: "Record deleted..!",
      Deleted_Record: DeleteRecord,
    });
  } catch (error) {
    res.status(500).json({
      status: `Internal server error`,
      message: error.message,
    });
  }
};
