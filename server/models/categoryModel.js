const Category = require('../../db/models/categories')

exports.findCategories = async () => {
    const data = await Category.find({}).populate('products')

    return data
}
