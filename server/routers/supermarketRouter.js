const supermarketRouter = require('express').Router()
const {
    getSupermarkets,
    getSupermarketById,
    postSupermarket,
} = require('../controllers/supermarketController')

supermarketRouter.route('/').get(getSupermarkets).post(postSupermarket)
supermarketRouter.route('/:supermarket_id').get(getSupermarketById)

module.exports = supermarketRouter
