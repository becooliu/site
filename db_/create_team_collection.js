const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbo = db.db('site');
    let ins_data = {
        mod: 'team',
        mod_title: '核心团队',
        mod_subtitle: 'Team',
        members: [{
            name: 'Juliye',
            position: 'CEO',
            title: '创始人',
            avatar: '/static/images/05.img1.jpg',
            intr: '在企业级产品技术研究方面具有十多年经验，曾开发并维护过多款百万级用户的产品。'
        },{
            name: 'Selina',
            position: 'CEO',
            title: '创始人',
            avatar: '/static/images/05.img2.jpg',
            intr: '在企业级产品技术研究方面具有十多年经验，曾开发并维护过多款百万级用户的产品。'
        }, {
            name: 'Selina',
            position: 'CEO',
            title: '创始人',
            avatar: '/static/images/05.img2.jpg',
            intr: '在企业级产品技术研究方面具有十多年经验，曾开发并维护过多款百万级用户的产品。'
        },{
            name: 'Juliye',
            position: 'CEO',
            title: '创始人',
            avatar: '/static/images/05.img1.jpg',
            intr: '在企业级产品技术研究方面具有十多年经验，曾开发并维护过多款百万级用户的产品。'
        }]
        
    };
    dbo.collection('teams').insertOne(ins_data, (err , result) => {
        if (err) throw err;
        console.log('插入的数据条数为：' + result.insertedCount);
        db.close();
    })
})