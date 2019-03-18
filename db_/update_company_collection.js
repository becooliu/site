const MongoClient = require('mongodb').MongoClient;
const con_url = 'mongodb://localhost:27017';

MongoClient.connect(con_url, (err , db) => {
    if (err) throw err;
    let dbo = db.db('site');
    let update_condition = {mod: 'company'};
    let update_content = { $set: {
        mod_items: [
            {
                tel: '027-33225698',
                company_name: '某某有限公司公司',
                address: '苏州市金鸡湖大道00号',
                zip_code: '230020',
                fax: '230020',
                mobile_phone: '18969696969',
                email: '24325@qq.com'
            }
        ]
    }}
    dbo.collection('companies').updateMany(update_condition, update_content, (error , res) => {
        if (error) throw error;
        console.log('修改的数据条数为：'+ res.result.nModified);
        db.close();
    })
})