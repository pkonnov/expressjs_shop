const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    required: true,
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true 
  }
})


module.exports = mongoose.model('users', userSchema)
