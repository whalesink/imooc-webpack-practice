import redis from 'redis'
import { type } from 'os';

const options = {
    host: '123.56.82.206',
    port: 15001,
    password: '123456',
    detect_buffers: true,
    retry_strategy: function (options) {
        if (options.error && options.error.code === "ECONNREFUSED") {
            // End reconnecting on a specific error and flush all commands with
            // a individual error
            return new Error("The server refused the connection");
        }
        if (options.total_retry_time > 1000 * 60 * 60) {
            // End reconnecting after a specific timeout and flush all commands
            // with a individual error
            return new Error("Retry time exhausted");
        }
        if (options.attempt > 10) {
            // End reconnecting with built in error
            return undefined;
        }
        // reconnect after
        return Math.min(options.attempt * 100, 3000);
    },
}

const client = redis.createClient(options);

/**
 * 支持 string 和 hash
 * @param {*} key 
 * @param {*} value 
 */
const setVal = (key, value) => {
    if(typeof value === 'undefined' || value == null || value === ''){
        return;
    }

    if(typeof value === 'string'){
        client.set(key, value);
    }

    if(typeof value === 'object'){
        Object.keys(value).forEach((item) => {
            client.hset(key, item, value[item], redis.print)
        })
    }
}

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

const getVal = (key)=>{
    return getAsync(key);
}

const getHval = (key) => {
    return promisify(client.hgetall).bind(client)(key)
}

export {
    client,
    getVal,
    setVal,
    getHval,
}