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
    it('status:404 when path name is invalid', () => {
        return request(app)
            .get('/api/adghdkgfhsdhg')
            .expect(404)
            .then((res) => {
                expect(res.body.message).to.equal('404: Path Not Found')
            })
    })
    describe('/products', () => {
        it('GET: 200 - responds with an array of all available foods', () => {
            return request(app)
                .get('/api/products')
                .expect(200)
                .then((res) => {
                    expect(res.body.products[0]).to.contain.keys(
                        'foodName',
                        'category'
                    )
                    expect(res.body.products).to.be.an('array')
                })
        })
        it('POST: 201 - responds with an object of the inserted product', () => {
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
        it('PATCH: 200 - responds with an object of the updated product', () => {
            return request(app)
                .patch('/api/products')
                .send({
                    foodName: 'strawberries',
                    category: '5eaafb9f90b70d7c8f6b47ac',
                })
                .expect(200)
                .then((res) => {
                    expect(res.body.updatedProduct).to.contain.keys(
                        '_id',
                        'foodName',
                        'category'
                    )
                    expect(res.body.updatedProduct.category).to.equal(
                        '5eaafb9f90b70d7c8f6b47ac'
                    )
                })
        })
    })
    describe('/category', () => {
        it('GET: 200 - responds with an array of category objects', () => {
            return request(app)
                .get('/api/category')
                .expect(200)
                .then((res) => {
                    expect(res.body.categories[0]).to.contain.keys(
                        'name',
                        '_id'
                    )
                    expect(res.body.categories).to.be.an('array')
                })
        })
    })
})
