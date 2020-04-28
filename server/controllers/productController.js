const { findProducts } = require("../models/productModel");

exports.getProducts = (req, res, next) => {
  findProducts().then((data) => res.status(200).send(data));
};
