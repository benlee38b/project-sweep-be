const categoryRouter = require("express").Router();
const { getCategory } = require("../controllers/categoryController");

categoryRouter
  .route("/")
  .get(getCategory)
  .all((req, res, next) => res.sendStatus(405));

module.exports = categoryRouter;
