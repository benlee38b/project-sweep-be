exports.customErrors = (err, req, res, next) => {
    console.log(err)
    if (err.status) {
        res.status(err.status).send({ message: err.message })
    } else {
        next(err)
    }
}
