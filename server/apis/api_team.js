'use strict'

const db = require('../db');
const router = require('express').Router();
let response_data = {};

router.get('/api/team/get_members', (req, res) => {
    let condition = {mod: 'team'};
    db.team.find(condition, (err, result) => {
        if (err) throw err;
        response_data = {
            data: result
        }
        res.json(response_data);
    })
})
module.exports = router;