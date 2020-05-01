const Category = require('../../db/models/categories')

exports.findCategories = async () => {
    const data = await Category.find({})

    return data
}
