const jwt = require('jsonwebtoken')

module.exports.cektoken = (req, res, next) => {
    if (req.headers['x_token']) {
        const token = req.headers['x_token']
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                next(Error('Failed to authenticate token'))
            } else {
                req.decoded = decoded
                next()
            }
        })
    } else {
        next(Error('Error! token is missing'))
    }
}