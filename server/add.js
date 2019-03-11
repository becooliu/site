var MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
MongoClient.connect(url, function(err,db) {
    if(err) throw err;
    console.log('数据库已连接')
    var dbo = db.db('site');
    var ins_data = {
        mod: 'exapmle',
        data:{
            example_title: '样板房欣赏',
            example_subtitle: 'Example room',
            example_item: [
                {title: '投资规划1', introduction: '投资规划是指专业人员为客户制一订方案，以获取与风险对应的最优收益的过程。'},
                {title: '投资规划2', introduction: '投资规划是指专业人员为客户制一订方案，以获取与风险对应的最优收益的过程。'},
                {title: '投资规划3', introduction: '投资规划是指专业人员为客户制一订方案，以获取与风险对应的最优收益的过程。'}
            ]
        }
    }
    dbo.collection('home').insertOne(ins_data, function(err, res) {
        if (err) throw err
        console.log('插入的文档数量为'+res.insertedCount);
        db.close();
    });
})