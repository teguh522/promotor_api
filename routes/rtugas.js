const route = require('express').Router()
const db = require('../models')
const moment = require('moment')
const { Op } = require('sequelize')

route.route('/all').get(async (req, res, next) => {
    try {
        const listugas = await db.frm_create_tugas.findAll()
        res.json({ data: listugas })
    } catch (error) {
        next(Error(error))
    }
})
route.route('/available').get(async (req, res, next) => {
    try {

        const listugas = await db.frm_create_tugas.findAll({
            where: { tgl_akhir: { [Op.gte]: moment().format('Y-MM-DD') } }
        })
        res.json({ data: listugas })
    } catch (error) {
        next(Error(error))
    }
})
route.route('/detail/:id_create_tugas?/:customer_id?').get(async (req, res, next) => {
    try {
        const listugas = await db.frm_create_tugas.findAll({
            where: {
                id_create_tugas: req.query.id_create_tugas
            }
        })
        res.json({ data: listugas })
    } catch (error) {
        next(Error(error))
    }
})
module.exports = route