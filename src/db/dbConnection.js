const mongoose = require("mongoose");

const db_url = "mongodb://127.0.0.1:27017/mydb";

mongoose.connect(db_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("Connecttion Successful..!");
  })
  .catch((err) => {
    console.log("Connection Failed..! "+err);
  });
