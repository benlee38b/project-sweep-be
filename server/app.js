//run mongod on console
const apiRouter = require('./routers/apiRouter')
const express = require('express')
const app = express()
const router = express.Router()
const { customErrors } = require('./errorHandling/errors')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
res.setHeader('Access-Control-Allow-Origin', '*')
app.use(express.json())
const cors = require('cors')
app.use(cors())

app.use('/', router)
app.use(express.json())

app.use('/api', apiRouter)

app.all('/*', (req, res, next) => {
    next({ status: 404, message: '404: Path Not Found' })
})
app.use(customErrors)

module.exports = app
