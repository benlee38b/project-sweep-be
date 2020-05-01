const supermarketRouter = require('express').Router()
const { getSupermarkets } = require('../controllers/supermarketController')

supermarketRouter.route('/').get(getSupermarkets)

module.exports = supermarketRouter
