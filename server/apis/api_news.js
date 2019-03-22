'use strict'

const db = require('../db');
const router = require('express').Router();

let response_data = {};

router.get('/api/home/get_news', (req, res) => {
    //console.log(req);
    db.news.find({}, function(error , response) {
        if( error ) throw new Error(error);
        response_data = {
            data: response
        }
        res.json({
            response_data
        })
    })
    response_data = null;
})
module.exports = router;