const Supermarket = require('../../db/models/supermarkets')

exports.findSupermarkets = async () => {
    const data = await Supermarket.find({})
    return data
}

exports.findSupermarketById = async (supermarket_id) => {
    const data = await Supermarket.find({ _id: supermarket_id })
    return data[0]
}

exports.insertSupermarket = async (newSupermarket) => {
    const { name, layout, aisleInfo, categoryLookup, location } = newSupermarket
    const data = await Supermarket.insertMany({
        name,
        location,
        layout,
        aisleInfo,
        categoryLookup,
    })

    return data[0]
}
