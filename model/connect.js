//引入mongoose链接库模块
const mongoose = require('mongoose')
//链接数据库
mongoose
  .connect('mongodb://127.0.0.1:27017/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('mongodb链接成功')
  })
  .catch(err => {
    console.log('mongodb链接失败：' + err)
  })
