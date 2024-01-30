const mongoose = require("mongoose");

const db_url = "mongodb://127.0.0.1:27017/mydb";

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
