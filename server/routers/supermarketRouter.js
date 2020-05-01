const supermarketRouter = require('express').Router()
const {
    getSupermarkets,
    getSupermarketById,
} = require('../controllers/supermarketController')

supermarketRouter.route('/').get(getSupermarkets)
supermarketRouter.route('/:supermarket_id').get(getSupermarketById)

module.exports = supermarketRouter
