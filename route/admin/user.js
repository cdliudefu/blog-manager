const {
  loadUsers,
  saveUser,
  deleteUser,
  findUserById
} = require('../../model/action/userAction')

//用户列表
async function userList(req, res) {
  let users = await loadUsers()
  res.render('admin/user', { users })
}

//新增用户
async function addUser(req, res) {
  console.log(req.body)
  try {
    await saveUser(req.body)
    res.redirect('/admin/user')
  } catch (err) {}
}

//删除用户
async function removeUser(req, res) {
  try {
    const id = req.params.id
    await deleteUser(id)
    res.redirect('/admin/user')
  } catch (err) {}
}

async function editUser(req, res) {
  console.log(req.params.id)
  try {
    let users = await loadUsers()
    const id = req.params.id
    let user = await findUserById(id)
    req.app.editUser = user
    res.render('admin/user', { users: users, user })
  } catch (err) {}
}

module.exports = {
  userList,
  addUser,
  removeUser,
  editUser
}
