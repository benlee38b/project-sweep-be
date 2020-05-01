const Supermarket = require('../../db/models/supermarkets')

exports.findSupermarkets = async () => {
    const data = await Supermarket.find({})
    return data
}
