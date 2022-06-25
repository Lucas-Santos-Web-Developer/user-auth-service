const userModel = require('../../models/users')
const { dbConnection } = require('../../middlewares/database/connection')
const auth = require('../../middlewares/auth')
const validations = require('../../middlewares/validations')

exports.createUser = async ( req, res ) => {

  const { userName, password, confirmPassword } = req.body

  
  
  try {
    validations.nameValidations( userName )

    validations.passwordValidations( password )

    validations.confirmPassword( password, confirmPassword )

    
    const passwordHashed = await auth.passwordEncrypt(password)

    dbConnection()

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
  const secret = process.env.SECRET
  
  // validar dados
  try {
    // comparar com os dados do banco de dados
    await auth.passwordCompare( password, passwordHashed )
    .then(() => console.log("as senhas batem"));
    
    const token = await auth.tokenGenerator( {id}, secret )
    
    res.status(200).json({token, user, id, passwordHashed, secret})
  } catch (error) {
    console.log("error "+error)
  }
}

exports.myAccount = async ( req, res ) => {
  const id = req.params.id
  dbConnection()
  try {
    const userAccount = await userModel.findById(id)
    res.status(200).json({userAccount})
  } catch (error) {
    res.status(401).json({errorMessage: "Ocorreu um erro!"})
    console.log(`Ocorreu um erro: ${error.message}`)
  }
}