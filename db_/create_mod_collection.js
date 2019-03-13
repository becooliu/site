const MongoClient = require('mongodb').MongoClient;
const connect_url = 'mongodb://localhost:27017';

MongoClient.connect(connect_url, (err, db) => {
    if (err) throw err;
    console.log('数据库已连接.');
    var dbo = db.db('site');
    const ins_data = [
        {mod: 'example', title: '样板房欣赏', subTitle: 'Example room'},
        {mod: 'news', title: '新闻资讯', subTitle: 'News'},
        {mod: 'contact', title: '联系我们', subTitle: 'Contact us'}
    ];
    dbo.collection('module').insertMany(ins_data, (error, res) => {
        if (error) throw error;
        console.log('修改的文档数为'+res.insertedCount);
        db.close();
    })
})
