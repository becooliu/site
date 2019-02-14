'use strict'

const home_model = require('./db');
const router = require('express').Router();
const fs = require('fs');

var response_data = {};

router.get('/home/home/get_example',(err, res) => {
    home_model.home.find({example: })
})