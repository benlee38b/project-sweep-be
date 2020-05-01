const apiRouter = require('express').Router()
const categoryRouter = require('./categoryRouter')
const productsRouter = require('./productRouter')
const supermarketRouter = require('./supermarketRouter')

apiRouter.use('/category', categoryRouter)
apiRouter.use('/products', productsRouter)
apiRouter.use('/supermarkets', supermarketRouter)

module.exports = apiRouter
