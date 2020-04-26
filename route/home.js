const express = require('express')
//实例路由对象
const router = express.Router()

router.get('/', (req, res) => {
  res.send('客户端首页')
})

module.exports = router
