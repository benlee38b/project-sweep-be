const CategorySchema = require('../../db/models/categories')

exports.findCategories = async () => {
    const data = await CategorySchema.find({}).populate('products')

    return data
}
