const { findCategories } = require('../models/categoryModel')

exports.getCategory = (req, res, next) => {
    findCategories().then((categories) => res.status(200).send({ categories }))
}
