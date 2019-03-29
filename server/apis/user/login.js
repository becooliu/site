'use strict'

const db = require('../../db');
const router = require('express').Router();
let res_data = {};

router.post('/api/user/login', (req , res) => {
    let req_data = req.body;
    let search_condition = {username: req_data.username}
    db.users.findOne(search_condition, (err , result) => {
        if (err) {
            console.log(err);
            res_data = {
                code: '0',
                message: '登录失败，请联系系统管理员'
            }
        }
        if (result == null) {
            res_data = {
                code: '4',
                message: '无此帐号或帐号输入错误'
            }
        }
        else if (result.username == req_data.username && result.password == req_data.password) {
            res_data = {
                code: '2',
                message: '登录成功'
            }
        }else {
            res_data = {
                code: '1',
                message: '帐号或密码不正确,登录失败.'
            }
        }
        res.json(res_data);
    })
})

module.exports = router;