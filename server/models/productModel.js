const Product = require('../../db/models/products')

exports.findProducts = async () => {
    const data = await Product.find({}).populate({
        path: 'category',
        select: 'name',
    })
    console.log(data)

    return data
}

exports.insertProduct = async (product) => {
    const data = await Product.insertMany({
        foodName: product.foodName,
        category: product.category,
    })

    return data
}

exports.updateProduct = async (productChange) => {
    const data = await Product.findOneAndUpdate(
        { foodName: productChange.foodName },
        { category: productChange.category },
        { new: true }
    )

    return data
}
