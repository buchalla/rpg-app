'use strict';
const jwt = require('jsonwebtoken');

class Auth {

    make(user) {
        return jwt.sign(user, configs.secret, {
            expiresIn: "2 days"
        });
    }

    user(token) {
        return jwt.decode(token);
    }

    isValid(token) {
        try {
            let decode = jwt.verify(token, configs.secret);
            if (decode)
                return true;
            return false;
        } catch (e) {
            return false;
        }
    }

}

module.exports = new Auth();
