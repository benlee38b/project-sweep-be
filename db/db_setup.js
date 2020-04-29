const mongoose = require('mongoose')
const { runSeed } = require('./seeds/seed')

var uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/shops'
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
const connection = mongoose.connection
connection.once('open', function () {
    console.log('MongoDB database connection established successfully')
})

runSeed()
module.exports = connection
module.exports = mongoose
