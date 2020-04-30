const productsRouter = require('express').Router()
const {
    getProducts,
    postProduct,
    patchProduct,
} = require('../controllers/productController')

productsRouter
    .route('/')
    .get(getProducts)
    .post(postProduct)
    .patch(patchProduct)
    .all((req, res, next) => res.sendStatus(405))

module.exports = productsRouter
