//run mongod on console
const apiRouter = require("./routers/apiRouter");
const express = require("express");
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 9090;
const mongoose = require("../db/db_setup");

const cors = require("cors");
app.use(cors());

app.use("/", router);
app.use(express.json());

app.use("/api", apiRouter);

app.listen(PORT, function () {
  console.log("Server is running on PORT: " + port);
});

module.exports = app;
