//过滤未登陆的访问
async function loginFilter(req, res, next) {
  if (req.url != '/login' && !req.session.username) {
    res.redirect('/admin/login')
    return
  }
  next()
}

module.exports = loginFilter
