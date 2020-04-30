const mongoose = require('mongoose')
const { runSeed } = require('./seeds/seed')

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/shop'

mongoose
    .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('connected')
        return runSeed()
    })
    .then(() => {
        return mongoose.disconnect()
    })
    .then(() => {
        console.log('disconnected')
    })
    .catch(console.log)
