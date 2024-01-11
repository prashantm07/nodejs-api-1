const MensRanking = require("../model/mens");

// exports.checkID =  (req, res, next, val) => {
//   const _id =  req.params.id;
//   const check =  MensRanking.findById(_id);
//   // console.log(check)
//   if(check._id*1 > MensRanking.length ) {
//     return res.status(404).json({
//       status: "Filed",
//       message: `ID Not Found`
//     })
//   }
//   next();
// }

exports.getAll = async (req, res) => {
  try {
    const getMens = await MensRanking.find({}).sort({ ranking: 1 });
    res.status(200).send(getMens);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.getById = async (req, res) => {
  const _id = req.params.id;
  try {
    const getMen = await MensRanking.findById(_id);
    res.send(getMen);
  } catch (error) {
    res.status(400).json({
      error: "Id not found",
    });
  }
};

exports.addNewRecord = async (req, res) => {
  try {
    const addingMensRecords = new MensRanking(req.body);
    const insertMens = await addingMensRecords.save();
    res.status(201).send(insertMens);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.updateRecord = async (req, res) => {
  const _id = req.params.id;
  console.log("update record");
  try {
    const updateMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateMen);
  } catch (error) {
    res.status(500).send("id not found : " + _id);
  }
};

exports.deleteRecord = async (req, res) => {
  const _id = req.params.id;
  try {
    const DeleteRecord = await MensRanking.findByIdAndDelete(_id);
    console.log(DeleteRecord, "******");
    // res.status(204).send(updateMen);
    res.status(200).json({
      status: "Record deleted..!",
      Deleted_Record: DeleteRecord,
    });
  } catch (error) {
    res.status(404).json({
      status: ` Not found`,
      message: `${_id} is not a record`,
    });
  }
};
