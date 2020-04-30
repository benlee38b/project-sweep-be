const chai = require('chai')
const mongoose = require('mongoose')
const { expect } = require('chai')
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

after(() => mongoose.disconnect())

describe('/api', () => {
    describe('/products', () => {
        it('GET: 200 - responds with an array of all available foods', () => {
            return request(app)
                .get('/api/products')
                .expect(200)
                .then((res) => {
                    console.log(res.body.products[0])
                    expect(res.body.products[0]).to.contain.keys(
                        'foodName',
                        'category'
                    )
                    expect(res.body.products).to.be.an('array')
                })
        })
        it('GET: 201 - responds with an object of the inserted product', () => {
            return request(app)
                .post('/api/products')
                .send({
                    foodName: 'stilton',
                    category: '5eaab5549540fd57898921c3',
                })
                .expect(201)
                .then((res) => {
                    expect(res.body.newProduct).to.contain.keys(
                        '_id',
                        'foodName',
                        'category'
                    )
                    expect(res.body.newProduct.foodName).to.equal('stilton')
                })
        })
    })
})
