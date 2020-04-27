const mongoose = require('mongoose')
//用户名  邮箱  角色  状态
//定义用户模型
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 4
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  role: {
    type: String,
    default: 'normal'
  },
  status: {
    type: Number,
    default: 1
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User

// User.create({
//   username: 'admin',
//   email: 'admin@123.com',
//   password: '123456',
//   role: 'admin',
//   state: 1
// })
//   .then(() => {
//     console.log('创建用户成功')
//   })
//   .catch(err => {
//     console.log('创建用户失败')
//   })
