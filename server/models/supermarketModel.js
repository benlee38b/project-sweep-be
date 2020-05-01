const Supermarket = require('../../db/models/supermarkets')

exports.findSupermarkets = async () => {
    const data = await Supermarket.find({})
    return data
}

exports.findSupermarketById = async (supermarket_id) => {
    const data = await Supermarket.find({ _id: supermarket_id })
    return data
}
