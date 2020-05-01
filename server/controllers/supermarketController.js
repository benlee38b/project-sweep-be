const {
    findSupermarkets,
    findSupermarketById,
} = require('../models/supermarketModel')

exports.getSupermarkets = (req, res, next) => {
    findSupermarkets()
        .then((supermarkets) => {
            res.status(200).send({ supermarkets })
        })
        .catch((err) => {
            console.log(err)
        })
}

exports.getSupermarketById = (req, res, next) => {
    const { supermarket_id } = req.params
    findSupermarketById(supermarket_id)
        .then((supermarket) => {
            res.status(200).send({ supermarket })
        })
        .catch((err) => {
            console.log(err)
        })
}
