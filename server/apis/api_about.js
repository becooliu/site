'use strict'

const db = require('../db');
const router = require('express').Router();

let response_data = {};

router.get('/api/about/get_about_info', (req, res) => {
    let condition = {mod: 'about_us'};
    db.about.find(condition , (err , result) => {
        if (err) throw err;
        response_data = {
            data: result
        }
        res.json(response_data);
    })
})

module.exports = router;