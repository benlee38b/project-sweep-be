const { findSupermarkets } = require('../models/supermarketModel')

exports.getSupermarkets = (req, res, next) => {
    findSupermarkets()
        .then((supermarkets) => {
            res.status(200).send({ supermarkets })
        })
        .catch((err) => {
            console.log(err)
        })
}
