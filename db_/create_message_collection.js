const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (error, db) => {
    if(error) throw error;
    let dbo = db.db('site');
    let insert_data = {
        mod: 'message',
        mod_items: [
            {
                name: 'admin',
                email: 'abc@123.com',
                tel: '13871228707',
                content: 'this is the message content .'
            }
        ]
    };
    dbo.collection('messages').insertOne(insert_data, (err, result) => {
        if( err ) throw err;
        console.log('修改的数据条数为：'+result.insertedCount);
        db.close();
    })
})