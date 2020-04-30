const productsRouter = require('express').Router()
const { getProducts, postProduct } = require('../controllers/productController')

productsRouter
    .route('/')
    .get(getProducts)
    .post(postProduct)
    .all((req, res, next) => res.sendStatus(405))

module.exports = productsRouter
