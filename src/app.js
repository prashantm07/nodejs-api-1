const express = require("express");
require("../src/db/dbConnection");
const mensRouters = require("../src/routers/mensRoutes");
const userRouter = require("../src/routers/userRoutes");


const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// middleware for mensRouters
app.use("/api/v1/mens", mensRouters);

// middleware for UserRouter
app.use("/api/v1/user", userRouter);

module.exports = app;

