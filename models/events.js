//https://kb.objectrocket.com/mongo-db/simple-mongoose-and-node-js-example-1007
//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
const mongoose = require('../db/database')

const eventsSchema = new mongoose.Schema({
    data_hour: {
        type: Date,
        default: Date.now
    },
    address: {
        type: String
    },
    client_name: {
        type: String
    },
    client_phone: {
        type: String
    },
    client_email: {
        type: String
    },
    description: {
        type: String
    }
})
//generates 'table' on mongo
const events = mongoose.model('events', eventsSchema)

module.exports = events