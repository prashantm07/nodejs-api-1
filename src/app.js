const express = require("express");
require("../src/db/dbConnection");
const appError = require("../src/util/appError");
const globalError = require("../src/controller/exceptionController");
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
app.use("/api/v1/student", studentsRouters);

app.all("*", (req, res, next) => {
  next(new appError(`Can't find ${req.originalUrl} on this server` , 400));
});

app.use(globalError);

module.exports = app;
