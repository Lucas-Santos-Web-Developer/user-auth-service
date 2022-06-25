const userModel = require('../../models/users')
const { dbConnection } = require('../../middlewares/database/connection')
const auth = require('../../middlewares/auth')

exports.createUser = async ( req, res ) => {

  const { userName, password } = req.body

  
  
  try {
    switch (password) {
      case " ":
        throw new Error('A senha não é válida')
        case null:
          throw new Error('a senha não é válida')
        }
        dbConnection()
        const passwordHashed = await  auth.passwordEncrypt(password)
        const user = await userModel.create({userName, password: passwordHashed})
        res.status(201).json({user})
  } catch (error) {
    console.log(`ocorreu um erro: ${error.message}`)
  }
}

exports.login = async ( req, res ) => {

  // recuperar dados do client
  const { userName, password } = req.body
  dbConnection()

  const user = await userModel.findOne({userName})
  const id = user._id
  const passwordHashed = user.password
  
  // validar dados
  // comparar com os dados do banco de dados
  try {
    const token = await auth.passwordCompare( {id}, password, passwordHashed )
    console.log(user)
    res.status(200).json(token)
  } catch (error) {
    console.log("error "+error)
  }
}