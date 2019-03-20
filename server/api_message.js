'use strict'

const db = require('./db');
const router = require('express').Router();

let response_data = {};

router.post('/api/home/send_message', (req , res) => {
    const receive_data = req.body;
    let condition = {mod: 'message'};
    let update = {
        $push:{
            mod_items: {
                name: receive_data.name,
                email: receive_data.email,
                tel: receive_data.tel,
                content: receive_data.content,
                date: Date.now()
            }
            
        }
    };
    db.message.updateMany(condition, update, function(err, result){
        if (err) throw err;
        response_data = {
            message: '留言成功，待客服与你联系。'
        }
        res.json({response_data});
    })
})

module.exports = router;