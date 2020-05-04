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
            .get('/api/NotAPath')
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
    describe('/supermarkets', () => {
        it('GET: 200 - responds with an array of supermarket objects', () => {
            return request(app)
                .get('/api/supermarkets')
                .expect(200)
                .then((res) => {
                    expect(res.body.supermarkets[0]).to.contain.keys(
                        'name',
                        '_id',
                        'layout',
                        'aisleInfo',
                        'categoryLookup'
                    )
                    expect(res.body.supermarkets[0].layout).to.be.an('array')
                    expect(res.body.supermarkets[0].aisleInfo).to.be.an(
                        'object'
                    )
                    expect(res.body.supermarkets[0].categoryLookup).to.be.an(
                        'object'
                    )
                })
        })
        it('POST: 201 - responds with an object of the inserted supermarket', () => {
            return request(app)
                .post('/api/supermarkets')
                .send({
                    name: 'postRequestSupermarket',
                    layout: [
                        [2, 1, 9, 4, 5, 7],
                        [6, 8, 5, 10, 17, 12],
                        [18, 14, 15, 11, 11, 13],
                    ],
                    categoryLookup: {
                        cheese: 2,
                        'vegetarian & free from': 14,
                        bakery: 1,
                        'cat & kitten': 12,
                        'vegetables & potatoes': 11,
                        fruit: 15,
                    },

                    aisleInfo: {
                        1: { type: 'tl', x: 0, y: 0, num: 2 },
                        2: { type: 'tm', x: 1, y: 0, num: 1 },
                        3: { type: 'tm', x: 2, y: 0, num: 9 },
                        4: { type: 'tm', x: 3, y: 0, num: 4 },
                        5: { type: 'tm', x: 4, y: 0, num: 5 },
                        6: { type: 'tr', x: 5, y: 0, num: 6 },
                        7: { type: 'ml', x: 0, y: 1, num: 7 },
                        8: { type: 'mm', x: 1, y: 1, num: 8 },
                        9: { type: 'mm', x: 2, y: 1, num: 3 },
                        10: { type: 'mm', x: 3, y: 1, num: 10 },
                        11: { type: 'mm', x: 4, y: 1, num: 17 },
                        12: { type: 'mr', x: 5, y: 1, num: 12 },
                        13: { type: 'cl', x: 0, y: 2, num: 18 },
                        14: { type: 'cm', x: 1, y: 2, num: 14 },
                        15: { type: 'cm', x: 2, y: 2, num: 15 },
                        16: { type: 'cm', x: 3, y: 2, num: 16 },
                        17: { type: 'cm', x: 4, y: 2, num: 11 },
                        18: { type: 'cr', x: 5, y: 2, num: 13 },
                    },
                })
                .expect(201)
                .then((res) => {
                    expect(res.body.addedSupermarket).to.contain.keys(
                        'name',
                        '_id',
                        'layout',
                        'aisleInfo',
                        'categoryLookup'
                    )
                    expect(res.body.addedSupermarket.name).to.equal(
                        'postRequestSupermarket'
                    )
                })
        })
        describe('/:supermarket_id', () => {
            it('GET: 200 - responds with supermarket object', () => {
                return request(app)
                    .get('/api/supermarkets')
                    .then((res) => {
                        return request(app)
                            .get(
                                `/api/supermarkets/${res.body.supermarkets[0]._id}`
                            )
                            .expect(200)
                            .then((res) => {
                                expect(res.body.supermarket).to.contain.keys(
                                    'name',
                                    '_id',
                                    'layout',
                                    'aisleInfo',
                                    'categoryLookup'
                                )
                                expect(res.body.supermarket.layout).to.be.an(
                                    'array'
                                )
                                expect(res.body.supermarket.aisleInfo).to.be.an(
                                    'object'
                                )
                                expect(
                                    res.body.supermarket.categoryLookup
                                ).to.be.an('object')
                            })
                    })
            })
        })
    })
})
