//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
//https://www.npmjs.com/package/dotenv
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.Promise = global.Promise

module.exports = mongoose

