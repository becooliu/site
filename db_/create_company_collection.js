const MongoClient = require('mongodb').MongoClient;
const connect_url = 'mongodb://localhost:27017';

MongoClient.connect(connect_url, function(err , db) {
    if (err) throw err;
    let dbo = db.db('site');
    let ins_data = {
        mod: 'company',
        mod_items: [{
            tel: '027-33225698',
            company_name: '某某有限公司公司',
            address: '苏州市金鸡湖大道00号',
            zip_code: '230020',
            fax: '230020',
            mobile_phone: '18969696969',
            email: '24325@qq.com'
        }]
    }
    dbo.collection('companies').insertOne(ins_data, (error, result) => {
        if (error) throw error;
        console.log('插入的记录条数为：'+result.insertedCount);
        db.close();
    })
})