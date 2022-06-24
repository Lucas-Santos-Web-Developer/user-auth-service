const { connect } = require('mongoose')

const connection = async((dbUrl) => {
  await connect(`${dbUrl}`)
  .then(() => console.log('nova conexão com o banco!'))
  .catch ((error => console.log(`Ocorreu um erro: ${error.message}`)))
})