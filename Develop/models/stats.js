const { Schema, model } = require('mongoose')

const Stats = model('stats', new Schema({
  text: String
}))

module.exports = Stats