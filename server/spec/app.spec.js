const chai = require('chai')
const { expect } = require('chai')
const connection = require('../../db/db_setup')

beforeEach(() => {
    return connection.seed.run()
})
after(() => {
    return connection.destroy()
})

describe('/api', () => {
    describe('/products', () => {
        it('GET: 200 - responds with an array of all available foods', () => {
            return request(app)
                .get('/api/topics')
                .expect(200)
                .then((res) => {
                    expect(res.body.topics[0]).to.contain.keys(
                        'slug',
                        'description'
                    )
                    expect(res.body.topics).to.be.an('array')
                    expect(res.body.topics.length).to.equal(3)
                })
        })
    })
})
