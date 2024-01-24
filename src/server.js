const app = require("./app");
require("dotenv").config();

const port = process.env.PORT;
const hostName = process.env.HOST;

app.listen(port, hostName, () => {
  console.log(`server Running at http://${hostName}/${port}`);
});
