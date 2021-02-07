const route = require('express').Router()

route.route('/').get((req, res) => {
    res.json("Berhasil")
})
module.exports = route