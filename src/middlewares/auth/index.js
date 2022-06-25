const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
exports.passwordEncrypt = async(password) => {
  const salt = await bcrypt.genSalt(8)
  const passwordHashed = await bcrypt.hash(password, salt)
  return passwordHashed
}

exports.passwordCompare = async( password, passwordHashed ) => {
  try {
    const userPassword = await bcrypt.compare( password, passwordHashed )
    return userPassword
  } catch (error) {
    console.log("error" + error)
  }
}
exports.tokenGenerator = async ( id, secret ) => {
  try {
    const token = jwt.sign( id, secret )
    return token
  } catch (error) {
    console.log("error" + error)
  }
}

exports.tokenExistis = ( req, res, next ) => {
  const authHeader = req.headers['authorization']
  const validToken = authHeader && authHeader.split(' ')[1]
  try {
    if ( !validToken ) throw new Error('Acesso negado!')
    const secret = process.env.SECRET
    jwt.verify( validToken, secret )
    next()
  } catch (error) {
    console.log(`Houve um erro : ${error.message}`)
    res.status(401).json({message: `${error}`})
  }
}