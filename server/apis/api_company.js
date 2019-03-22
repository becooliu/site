'use strict'

const db = require('../db');
const router = require('express').Router();

let response_data = {};

router.get('/api/home/get_company_info', (req , res) => {
    db.company.find({}, function(err, response) {
        if (err) throw new Error(err);
        console.log(response);
        response_data = {
            data: response
        }
        res.json({
            response_data
        })
    })
    //response_data = null;
})

module.exports = router;