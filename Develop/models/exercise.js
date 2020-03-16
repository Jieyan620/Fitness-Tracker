const { Schema, model } = require('mongoose')

const Exercise = model('exercise', new Schema({
  text: String
}))

module.exports = Exercise