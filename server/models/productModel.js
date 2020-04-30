const Product = require('../../db/models/products')

exports.findProducts = async () => {
    const data = await Product.find({}).populate({
        path: 'category',
        select: 'name',
    })

    return data
}

exports.insertProduct = async (product) => {
    const data = await Product.insertMany({
        name: product.name,
        category: product.category,
    })
    // const item = await Product.findOne({ name: 'swiss rolls' })
    //     .populate({
    //         path: 'category',
    //         select: 'name',
    //     })
    //     .then((res) => {
    //         console.log(res)
    //     })

    return data
}
