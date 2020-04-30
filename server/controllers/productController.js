const {
    findProducts,
    insertProduct,
    updateProduct,
} = require('../models/productModel')

exports.getProducts = (req, res, next) => {
    findProducts()
        .then((products) => res.status(200).send({ products }))
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

exports.patchProduct = (req, res, next) => {
    const productChange = req.body
    updateProduct(productChange).then((updatedProduct) => {
        console.log(updatedProduct, 'here')
        res.status(200).send({ updatedProduct })
    })
}
