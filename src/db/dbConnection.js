require("dotenv").config();
const mongoose = require("mongoose");

const db_url = process.env.DB_URL;

mongoose.connect(db_url, {
  // this for only version 5 or oldest version
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
  })
  .then(() => {
    console.log("DataBase Connected Successful..!");
  })
  .catch((err) => {
    console.log("DataBase Connection Failed..! "+err);
  });
