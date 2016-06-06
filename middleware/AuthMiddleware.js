'use strict';
const Auth = require(`${configs.folder.bo}Auth`);
class AuthMiddleware {

    basic(req, res, next) {
        let token = req.body.token || req.query.token || req.headers['x-access-token'];
        if (!token)
            return res.status(403).send({status:false, data: 'No token provided'})
        else if (!Auth.isValid(token))
            return res.status(403).send({status:false, data: 'Token invalid'});
        else {
            req.auth = Auth.user(token);
            next();
        }
    }

}

module.exports = new AuthMiddleware();
