require("dotenv").config();
const app = require("./app");

const port = process.env.PORT;
const hostName = process.env.HOST;

app.listen(port, hostName, () => {
  console.log(`server Running at http://${hostName}/${port}`);
});
