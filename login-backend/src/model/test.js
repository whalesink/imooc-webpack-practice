/**
 * 数据库业务层
 */

import mongoose from '../config/DBHelper'

const Schema = mongoose.Schema

const TestSchema = new Schema({
    'name': {type: String},
    'age': {type: Number},
    'email': {type: String}
});

const TestModel = mongoose.model('users', TestSchema);

export default TestModel