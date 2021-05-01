//https://www.npmjs.com/package/bcrypt
const user = require('../models/user')
const bcrypt = require('bcrypt')

const insert = async function( data ) {
    data.password = await bcrypt.hash(data.password, 10)
    return await user.create( data )
}
const update = async function( data ) {
    return await user.findByIdAndUpdate(data._id, data)
}
const remove = async function( data ) {
    return await user.findByIdAndDelete(data._id)
}
const loadByName = async function( name ) {
    return await user.findOne({name})
}
const loadByToken = async function( token ) {
    return await user.findOne({token})
}

module.exports = {
    insert,
    update,
    remove,
    loadByName,
    loadByToken
}