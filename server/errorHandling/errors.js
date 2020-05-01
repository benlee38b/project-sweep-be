exports.customErrors = (err, req, res, next) => {
    console.log(err.status)
    if (err.status) {
        res.status(err.status).send({ message: err.message })
    } else {
        next(err)
    }
}
