const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.passwordEncrypt = async(password) => {
  const salt = await bcrypt.genSalt(8)
  const passwordHashed = await bcrypt.hash(password, salt)
  return passwordHashed
}

exports.passwordCompare = async( id, password, passwordHashed ) => {
  await bcrypt.compare( password, passwordHashed )
  const secret = process.env.SECRET
  try {
    const token = jwt.sign( id, secret )
    return token
  } catch (error) {
    console.log("error" + error)
  }
}