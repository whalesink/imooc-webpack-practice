const mongoose = require('mongoose');

// 连接数据库，格式：
// mongodb://用户名:密码@主机:端口/数据库名
mongoose.connect('mongodb://testUser:123456@123.56.82.206:27017/testDB',
    {
        useNewUrlParser: true,
        // 这里使用saslprep库，使得密码更加安全（否则控制台警告）
        useUnifiedTopology: true
    });

// 创建并连接到users表
const User = mongoose.model('users',{
    name: String,
    age: Number,
    email: String
});

const gg = new User({
    name: 'gg',
    age: 30,
    email: 'gg@top.com'
})

// 保存后打印log
gg.save().then(()=> {
    console.log('save ok~');
})