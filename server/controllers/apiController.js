const data = require('../endpoints.json')

exports.reqestJSON = (req, res, next) => {
    res.status(200).send({ data })
}
