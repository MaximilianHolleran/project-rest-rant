require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
console.log('connect to mongo:' , process.env.MONGO_URI)

module.exports.Place = require('./placelist')
module.exports.Comment = require('./comment')
