const { findCategories } = require('../models/categoryModel')

exports.getCategory = (req, res, next) => {
    findCategories().then((data) => res.status(200).send(data))
}
