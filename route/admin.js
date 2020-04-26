const express = require('express')
//实例路由对象
const router = express.Router()

router.get('/login', (req, res) => {
  res.render('admin/login', { msg: 'test' })
})

//提交登陆
router.post('/index', (req, res) => {
  console.log('res==', req.body)
  const { email, password } = req.body
  res.render('admin/common/layout', { user: email })
})

//dashbord
router.get('/dashbord', (req, res) => {
  res.render('admin/dashbord', { user: email })
})

//用户
router.get('/user', (req, res) => {
  res.render('admin/user', { user: email })
})

//文章
router.get('/article', (req, res) => {
  res.render('admin/article', { user: email })
})

//设置
router.get('/setting', (req, res) => {
  res.render('admin/setting', { user: email })
})

module.exports = router
