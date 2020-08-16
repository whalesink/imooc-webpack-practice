import { getVal } from '../config/RedisConfig'

// 检查验证码正确性
const checkCode = async (key, value) => {
    const redisDate = await getVal(key)
    if (redisDate != null) {
        if (redisDate.toLowerCase() === value.toLowerCase()) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

export default {
    checkCode
}