import User from './test'

// add 增
const user = {
    name: 'coconut',
    age: 23,
    email: 'cocoonut@qq.com'
}

// mongoose返回promiss
const addData = async ()=>{
    const date = new User(user);
    const result = await date.save();
    // console.log(result);
};
// addData();

// find 查
const findData = async ()=>{
    const result = await User.find();
    console.log(result);
};
// findData();

// update 改
const updateData = async ()=>{
    const result = await User.updateOne({name: 'zjj'}, {
        email:'updated'
    });
    console.log(result);
};
// updateData();
// delete 删

const delData = async ()=>{
    const result = await User.deleteOne({name: 'zjj'});
    console.log(result);
};
delData();