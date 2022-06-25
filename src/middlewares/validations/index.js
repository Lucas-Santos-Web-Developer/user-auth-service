exports.nameValidations = ( userName ) => {
  switch ( userName ) {
    case " ":
      throw new Error("o userName é invalido!")
      break;
    case null:
      throw new Error("O userName é null")
      break;
    case undefined:
      throw new Error("o userName não foi inserido")
      break;
  }
}
exports.passwordValidations = ( password ) => {
  switch ( password ) {
    case " ":
      throw new Error("A senha não foi inserida!")
      case null:
      throw new Error("A senha não foi inserida!")
      case undefined:
      throw new Error("A senha não foi inserida!")
    default: console.log('password ok')
  }
}
exports.confirmPassword = ( password, confirmPassword ) => {
  if ( password != confirmPassword ) throw new Error("As senhas não conferem!")
}