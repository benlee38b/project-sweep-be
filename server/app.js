//run mongod on console
const apiRouter = require("./routers/apiRouter");
const express = require("express");
const app = express();
const router = express.Router();
const port = 4000;
const mongoose = require("../db/db_setup");

const cors = require("cors");
app.use(cors());

app.use("/", router);
app.use(express.json());

app.use("/api", apiRouter);

app.listen(port, function () {
  console.log("Server is running on Port: " + port);
});

module.exports = app;
