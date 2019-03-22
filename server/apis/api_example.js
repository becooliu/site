'use strict'

const db = require('../db');
const router = require('express').Router();

var response_data = {};

router.get('/api/home/get_example',(req, res) => {
    db.home.find({},function(error, response) {
        if(error) throw error;
        response_data = {
            data: response
        }
        res.json({
            response_data
        })
        response_data = null;

    })
})

module.exports = router;