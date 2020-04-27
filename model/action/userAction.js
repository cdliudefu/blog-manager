const User = require('../schema/user')

//获取所有用户
async function loadUsers() {
  let list = await User.find()
  return list
}

//更加邮箱查找用户
async function findUserByEmial(email) {
  let user = await User.findOne({ email: email })
  return user
}

//新增用户
async function saveUser(user) {
  let result = await User.create(user)
  return result
}

//查询用户
async function findUserById(id) {
  let user = await User.findOne({ _id: id })
  return user
}

//修改用户
async function updateUser(user) {
  let result = await User.findOneAndUpdate()
  return result
}
//删除用户
async function deleteUser(id) {
  let result = await User.findOneAndRemove({ _id: id })
  return result
}

module.exports = {
  loadUsers,
  findUserByEmial,
  saveUser,
  findUserById,
  updateUser,
  deleteUser
}
