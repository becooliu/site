'use strict'

let db = require('../../db');
const router = require('express').Router();
let resData = {};

router.post('/api/user/regist', (req, res) => {
    db.users.findOne({username: req.body.username}, (err , result) => {
        if (err) throw err;
        if (result) {
            resData = {
                code: 0,
                message: '帐号已注册'
            }
            res.json(resData);
        }else {
            let user = req.body;
            let new_user = new db.users({
                username: user.username,
                password: user.password
            });
            new_user.save((err, data) => {
                if(err) throw err;
                resData = {
                    code: '2',
                    message: '帐号注册成功。'
                }
                res.json(resData);
            })
        }
    })
})

module.exports = router