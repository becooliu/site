'use strict'

const home_model = require('./db');
const router = require('express').Router();

var response_data = {};

router.get('/api/home/get_example',(err, res) => {
    home_model.home.find({example: 'example'}, function(err, example_data) {
        response_data = {
            data: example_data
        }
        res.json({
            response_data
        })
        response_data = null;

    })
})

module.exports = router;