/**
 * 保存全局配置信息
 */
const DB_URL = 'mongodb://testUser:123456@123.56.82.206:27017/testDB';

const REDIS = {
    host: '123.56.82.206',
    port: 15001,
    password: '123456'
}

const JWT_SECRET = 'Abc123'

export default {
    DB_URL,
    REDIS,
    JWT_SECRET
}