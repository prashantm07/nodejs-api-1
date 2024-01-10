const express = require("express");
require("../src/db/dbConnection");
const mensRouters = require("../src/routers/mensRoutes");
const studentsRouters = require("../src/routers/studentsRouters");
const userRouter = require("../src/routers/userRoutes");


const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// middleware for mensRouters
app.use("/api/v1/mens", mensRouters);

// middleware for UserRouter
app.use("/api/v1/user", userRouter);

// middleware for StudentsRouter
app.use("/api/v1/student",studentsRouters)

module.exports = app;

