const {
    findSupermarkets,
    findSupermarketById,
    insertSupermarket,
} = require('../models/supermarketModel')
const { customErrors } = require('../errorHandling/errors')

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
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.status(200).send({ supermarket })
        })
        .catch((err) =>
            res.status(404).send({ message: '404: Supermarket Not Found' })
        )
}

exports.postSupermarket = (req, res, next) => {
    const newSupermarket = req.body
    insertSupermarket(newSupermarket)
        .then((addedSupermarket) => {
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.status(201).send({ addedSupermarket })
        })
        .catch((err) => {
            console.log(err)
        })
}
