const bcrypt = require("bcrypt")

const hashPassword = (plainPassword) => { //? plainPassword = recibe la contraceña en texto plano
  const hashedPassword = bcrypt.hashSync(plainPassword, 10)
  return hashedPassword
}

// ! Compara si la contraseña en texto plano es igual a contraseña hasheada
const comparePassword = (plainPassword, hashedPassword) => {
  // ? se utiliza cuando hacemos un login y ecibimos la conreseña del usuario y comparamos lo que tenemos en la DB
  return bcrypt.compareSync(plainPassword,hashedPassword)
}


module.exports = {
  hashPassword,
  comparePassword
}