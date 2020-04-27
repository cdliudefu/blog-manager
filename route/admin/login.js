//登陆action
const { findUserByEmial } = require('../../model/action/userAction')

//访问登陆页
const loginPage = (req, res) => {
  res.render('admin/login')
}

//提交登陆信息
const login = async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body
  let user = await findUserByEmial(email)
  if (user && user.password == password) {
    req.session.username = user.username
    req.app.locals.userInfo = user
    res.redirect('/admin/dashbord')
  } else {
    res.render('admin/login', { message: '邮箱或密码不正确!' })
  }
}

//退出登陆
const loginOut = (req, res) => {
  req.session.username = null
  res.redirect('admin/login')
}

module.exports = { loginPage, login, loginOut }
