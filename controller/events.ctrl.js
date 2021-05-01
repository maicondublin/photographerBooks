//https://javascript.info/async-await
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
const events = require('../models/events')

const insert = async function( data ) {
    return await events.create( data )
}
const update = async function( data ) {
    return await events.findByIdAndUpdate(data._id, data)
}
const remove = async function( data ) {
    return await events.findByIdAndDelete(data._id)
}
const loadAll = async function() {
    return await events.find()
}
module.exports ={
    insert,
    update,
    remove,
    loadAll
}
