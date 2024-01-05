const MensRanking = require("../model/mens");

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
      res.status(400).send("id not found : " + _id);
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
      const updateMen = await MensRanking.findByIdAndDelete(_id);
  
      res.status(204).send(updateMen);
    } catch (error) {
      res.status(500).send("id not found : " + _id);
    }
  };
  
