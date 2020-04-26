const express = require('express')
    //实例路由对象
const router = express.Router()

router.get('/login', (req, res) => {
    res.render('admin/login', { msg: 'test' })
})

//提交登陆
router.post('/index', (req, res) => {
    console.log('res==', req.app)
    const { email, password } = req.body

    res.redirect('/admin/dashbord')
})

//dashbord
router.get('/dashbord', (req, res) => {
    res.render('admin/dashbord', { user: 'lisi' })
})

//用户
router.get('/user', (req, res) => {
    res.render('admin/user', { user: 'user' })
})

//文章
router.get('/article', (req, res) => {
    res.render('admin/article', { user: 'article' })
})

//设置
router.get('/setting', (req, res) => {
    res.render('admin/setting', { user: 'setting' })
})

module.exports = router