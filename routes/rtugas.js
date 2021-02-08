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
route.route('/detail/:id_tugas?').get(async (req, res, next) => {
    try {
        const listugas = await db.frm_create_tugas.findAll({
            where: {
                id_create_tugas: req.query.id_tugas
            }
        })
        res.json({ data: listugas })
    } catch (error) {
        next(Error(error))
    }
})
route.route('/historytugasuser/:customer_id?').get(async (req, res, next) => {
    try {
        const listugas = await db.sequelize.query(`SELECT * FROM frm_usr_tugas as a
        left join frm_create_tugas as b on a.id_tugas=b.id_create_tugas 
        where id_auth='${req.query.customer_id}'
        ORDER By id_create_tugas DESC
        ` , {
            type: db.sequelize.QueryTypes.SELECT
        });
        res.json({ data: listugas })
    } catch (error) {
        next(Error(error))
    }
})
module.exports = route