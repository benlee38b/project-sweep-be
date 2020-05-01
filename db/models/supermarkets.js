const mongoose = require('mongoose')

const Schema = mongoose.Schema

let SuperMarketSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    layout: {
        type: Array,
        required: true,
    },
    categoryLookup: {
        type: Schema.Types.Mixed,
        required: true,
    },
    aisleInfo: {
        type: Schema.Types.Mixed,
        required: true,
    },
})

module.exports = mongoose.model('Supermarket', SuperMarketSchema)
