const express = require('express')
//实例路由对象
const router = express.Router()
const { loginPage, login, loginOut } = require('./admin/login')
const { userList, addUser, removeUser, editUser } = require('./admin/user')

//登陆页面
router.get('/login', loginPage)

//提交登陆
router.post('/login', login)

router.get('/loginOut', loginOut)

//dashbord
router.get('/dashbord', (req, res) => {
  res.render('admin/dashbord', { user: 'lisi' })
})

//用户
router.get('/user', userList)
router.post('/addUser', addUser)
router.get('/delete/:id', removeUser)
router.get('/edit/:id', editUser)

//文章
router.get('/article', (req, res) => {
  res.render('admin/article', { user: 'article' })
})

//设置
router.get('/setting', (req, res) => {
  res.render('admin/setting', { user: 'setting' })
})

module.exports = router
