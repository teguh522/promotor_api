const route = require('express').Router()
const initModels = require('../models')
route.route('/').get(async (req, res, next) => {
    try {
        const listugas = await initModels.frm_create_tugas.findAll()
        res.json(listugas)
    } catch (error) {
        next(Error(error))
    }
})
module.exports = route