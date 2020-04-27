const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 2
  },
  content: {
    type: String
  },
  author: String
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article
