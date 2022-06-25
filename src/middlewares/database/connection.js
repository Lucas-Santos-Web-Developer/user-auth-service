const { connect } = require('mongoose')
require('dotenv').config()
const dbUrl = process.env.DB_URL



exports.dbConnection = (() => {
  connect(`${dbUrl}`)
  .then(() => console.log('nova conexão com o banco!'))
  .catch ((error => console.log(`Ocorreu um erro: ${error.message}`)))
})
