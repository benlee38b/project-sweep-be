const productsRouter = require('express').Router()
const { getProducts } = require('../controllers/productController')

productsRouter
    .route('/')
    .get(getProducts)
    .all((req, res, next) => res.sendStatus(405))

module.exports = productsRouter
