// https://auth0.com/blog/create-a-simple-and-secure-node-express-app/
//https://auth0.com/blog/complete-guide-to-nodejs-express-user-authentication/

const userController = require('../controller/user.ctrl')

//inherit params from the routes where its implements.
const validate = async function(req, res, next) {

    const [bearer, token] = req.headers.authorization.split('')

    const user = await userController.loadByToken(token)

    //NEXT => used to move forward to a NEXT route/path
    if(user) return next()
    //401 => used to aunauthorized
    res.status(401).send('Aunauthorized user or password!')
}

module.exports = validate