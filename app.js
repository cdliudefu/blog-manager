const path = require('path')
//引入服务模块
const express = require('express')

//引入表单提交转换模块
const bodyParser = require('body-parser')

//引入路由
const { admin, home } = require('./route')

//创建服务实例
const app = express()
//静态资源
app.use(express.static(path.join(__dirname, 'public')))

//表单处理模块
app.use(bodyParser.urlencoded({ extended: false }))

//模板文件路径
app.set('views', path.join(__dirname, 'views'))
//模板引擎
app.engine('art', require('express-art-template'))
//模板视图引擎
app.set('view engine', 'art')

//博客后台路由
app.use('/admin', admin)

//博客客户端路由
app.use('/home', home)

app.get('/', (req, res) => {
  res.send('hello world')
})

//监听端口
app.listen(8081, () => {
  console.log('服务启动成功!!访问地址：localhost')
})
