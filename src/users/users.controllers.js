const Users = require("../models/users.models")
// ? Dependences 
const uuid = require("uuid")
const { hashPassword } = require("../utils/crypto")

const getAllUsers = async () => {
  const data = await Users.findAll()
  return data
}

const getUserById = async (id) => {
  const data = await Users.findOne({
    where: {
      id
    }
  })
  return data
}

const createUser = async (data) => {
  const newUser = await Users.create({
    id: uuid.v4,
    firstname: data.firstname,
    lastName: data.lastName,
    email: data.email,
    password: hashPassword(data.password),
    phone: data.phone,
    birthday: data.birthday,
    gender: data.gender,
    country: data.country
  })
  return newUser
}

const updateUser = async (data, id) => {
  const result = await Users.update(data, {
    where: {
      id
    }
  })
  return result
}
const deleteUser = async (id) => {
  const data = await Users.destroy({
    where: {
      id
    }
  })
  return data
}


module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}



