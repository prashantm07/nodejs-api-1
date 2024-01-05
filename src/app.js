const express = require("express");
require("../src/db/dbConnection");
const mensRouters = require("../src/routers/mensRoutes");
const userRouter = require("../src/routers/userRoutes");
require("dotenv").config();

const port = process.env.PORT;
const hostName = process.env.HOST;

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// middleware for mensRouters
app.use("/api/v1/mens", mensRouters);

// middleware for UserRouter
app.use("/api/v1/user", userRouter);


app.listen(port, hostName, () => {
  console.log(`server Rnning at http://${hostName}/${port}`);
});
