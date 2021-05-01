//https://www.npmjs.com/package/bcrypt
const userController = require('../controller/user.ctrl')
const bcrypt = require('bcrypt')

const login = async function(data) {

    const{name, password} = data
    const user = await userController.loadByName(name)

    if(!user) throw new Error('User not found!')

    //comapre a user name & password with a existed in a db
    if(!await bcrypt.compare(password,user.password)) throw new Error('Invalid password!')

    user.token = await bcrypt.hash(`{id:${user.id}, ${Date()}}`, 10)

    await userController.update(user)
    return user.token
}

module.exports = {
    login
}