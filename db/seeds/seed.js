const Product = require('../models/products')
const Category = require('../models/categories')
const { productsData, categoryData } = require('../data/test_data/index')
const { makeRefObj } = require('../utils/seedUtils')

const deleteProducts = async () => {
    await Product.deleteMany({}, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log('deleted products')
        }
    })
}

const deleteCategories = async () => {
    await Category.deleteMany({}, function (err, result) {
        if (err) {
            console.log(err)
        } else {
            console.log('deleted categories')
        }
    })
}

const insertCategories = async (categoryData) => {
    const data = await Category.insertMany(categoryData)
    return data
}

const insertProducts = async (productData) => {
    const data = await Product.insertMany(productData)

    return data
}

const convertProductData = (result) => {
    refObj = makeRefObj(result, 'name', '_id')
    const productDataCat = productsData.map((product) => {
        newProduct = { ...product }
        newProduct.category = refObj[product.category]

        return newProduct
    })

    return productDataCat
}

exports.runSeed = (/* data? */) => {
    return deleteProducts()
        .then(() => deleteCategories())
        .then(() => insertCategories(categoryData))
        .then((categories) => {
            const newProductData = convertProductData(categories)
            return insertProducts(newProductData)
        })
}
