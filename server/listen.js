const mongoose = require('mongoose')
const app = require('./app')
const { PORT = 9090 } = process.env

mongoose
    .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/shop', {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('connected to db...')
        app.listen(PORT, () => console.log(`Listening on ${PORT}...`))
    })
