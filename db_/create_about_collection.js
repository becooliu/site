const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url , function(err , db){
    if (err) throw err;
    let dbo = db.db('site');
    let ins_data = {
        mod: 'about_us',
        mod_title: '公司介绍',
        mod_subtitle: 'Company',
        mod_cover_img: '/static/images/04.img1.jpg',
        mod_items: [
            {
                p_text: '深圳xxx有限公司由从事网络营销软件行业10年以上资深人士联合风险投资共同成立，一直从事网络营销软件和网络推广工具研究和开发。作为一家技术研发型公司，网势互联定位为电子商务方案提供商，不断增强公司研发能力，不断开发具有强大市场竞争力的网络产品，向合作伙伴不断提供优秀的网络产品方案。'
            },
            {
                p_text: '深圳xxx有限公司由从事网络营销软件行业10年以上资深人士联合风险投资共同成立，一直从事网络营销软件和网络推广工具研究和开发。作为一家技术研发型公司，网势互联定位为电子商务方案提供商，不断增强公司研发能力，不断开发具有强大市场竞争力的网络产品，向合作伙伴不断提供优秀的网络产品方案。'
            },
            {
                p_text: '我们使用中文、英语以及德语作为工作语言；我们很好的理解并尊重中德两国的人文、思维方式、工作习惯及其传统；数年来我们一直与德国人保持工作上的直接沟通与合作，一直是德资、瑞士企业与当地政府机关、领事机构、企事业单位、科研机构、律师事务所之间沟通协调与合作的直接桥梁；数年来，我们已经累积了诸多成功的涉外项目经验。'
            }
        ]
    };
    dbo.collection('abouts').insertOne(ins_data, (error , inserted) => {
        if (err) throw new Error(err);
        console.log('插入的数据条数为：'+inserted.insertedCount);
        db.close();
    })
})