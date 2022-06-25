const { model } = require('mongoose')

const userModel = model('users', {
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = userModel

