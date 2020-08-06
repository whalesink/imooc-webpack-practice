import { getVal, setVal, getHval } from './RedisConfig'

setVal('message', 'message from node.js')

getVal('message').then(res => {
    console.log('res from node:' + res);
})

setVal('obj', {
    name: '龙卷雨霁',
    master: '阿飞'
})

getHval('obj').then(res => {
    console.log('res for Hval' + res);
})