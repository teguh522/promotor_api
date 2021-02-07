const route = require('express').Router()
const jwt = require('jsonwebtoken')
const db = require('../models')
const bcrypt = require('bcrypt')


route.route('/signup').post(async (req, res, next) => {
    try {
        let { count } = await db.Loginapi.findAndCountAll({
            where:
                { 'username': req.body.username }
        })
        if (count > 0) {
            next(Error("Username sudah tersedia!"))
        } else {
            const user = await db.Loginapi.create(req.body)
            res.json(user)
        }
    } catch (error) {
        next(Error(error))
    }
})

route.route('/signin').post(async (req, res, next) => {
    try {
        const { username } = req.body
        const user = await db.Loginapi.findOne({
            where: { username }
        })
        if (user) {
            const { id, password, createdAt, updatedAt } = user
            const valid = await bcrypt.compare(req.body.password, password)
            if (valid) {
                const x_token = jwt.sign(
                    { id, username, createdAt, updatedAt },
                    process.env.SECRET_KEY,
                )
                res.json({
                    response: { x_token },
                    metadata: { message: 'Oke', code: res.statusCode },
                })
            } else {
                next(Error('Password tidak sesuai'))
            }
        } else {
            next(Error("Username tidak ditemukan!"))
        }
    } catch (error) {
        next(Error(error))
    }
})


module.exports = route