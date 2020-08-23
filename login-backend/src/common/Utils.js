import { getVal } from '../config/RedisConfig'

// 检查验证码正确性
const checkCode = async (key, value) => {
    const redisData = await getVal(key)
    
    if (redisData) {
        console.log('redisData - '+redisData);
        if (redisData.toLowerCase() === value.toLowerCase()) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

export {
    checkCode
}