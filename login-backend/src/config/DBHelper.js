/**
 * 定义连接和连接过程
 */

import mongoose from 'mongoose'
import config from './index'

// create connect
mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    // 这里使用saslprep库，使得密码更加安全（否则控制台警告）
    useUnifiedTopology: true
});

// connect success
mongoose.connection.on('connected', ()=>{
    console.log('mongoose connection open to' + config.DB_URL);
});

// connect exception
mongoose.connection.on('error', (err)=>{
    console.log('mongoose connection error: '+ error);
});

// disconnected
mongoose.connection.on('disconnected', ()=>{
    console.log('mongoose connection disconnected');
});

export default mongoose