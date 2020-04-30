const { findProducts, insertProduct } = require('../models/productModel')

exports.getProducts = (req, res, next) => {
    findProducts()
        .then((data) => res.status(200).send(data))
        .catch((err) => {
            console.log(err)
        })
}

exports.postProduct = (req, res, next) => {
    const product = req.body
    console.log(product)
    insertProduct(product)
        .then((newProduct) => {
            console.log(newProduct)
            res.status(201).send({ newProduct })
        })
        .catch((err) => {
            console.log(err)
        })
}
