const apiRouter = require('express').Router()
const categoryRouter = require('./categoryRouter')
const productsRouter = require('./productRouter')
const supermarketRouter = require('./supermarketRouter')
const { requestJSON } = require('../controllers/apiController')

apiRouter.use('/category', categoryRouter)
apiRouter.use('/products', productsRouter)
apiRouter.use('/supermarkets', supermarketRouter)

apiRouter.route('/').get(requestJSON)

module.exports = apiRouter
