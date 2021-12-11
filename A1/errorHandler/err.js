module.exports = (err, req, res, next) => {
    console.log('Path: ', req.path)
    console.error('Error: ', err)
    console.error('Error: ', err.type)

    res.json(err)
    next();
}

//module.exports = errorHandler;