const chai = require('chai')
const mongoose = require('mongoose')
const { expect } = require('chai')
const connection = require('../../db/db_setup')
const app = require('../app')
const request = require('supertest')
const { runSeed } = require('../../db/seeds/seed')

before(() => {
    return mongoose.connect(
        process.env.MONGODB_URI || 'mongodb://localhost:27017/shop',
        {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        }
    )
})

beforeEach(() => runSeed())

after(() => {
    return mongoose.disconnect().then(console.log).catch(console.log)
})

describe('/api', () => {
    describe('/products', () => {
        it('GET: 200 - responds with an array of all available foods', () => {
            return request(app)
                .get('/api/products')
                .expect(200)
                .then((res) => {
                    expect(res.body.products[0]).to.contain.keys(
                        'name',
                        'category'
                    )
                    expect(res.body.products).to.be.an('array')
                })
        })
    })
})
