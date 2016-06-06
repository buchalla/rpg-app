'use strict';
const UsersRepository = require(`${configs.folder.repository}UsersRepository`);
const Auth = require(`${configs.folder.bo}Auth`);

class LoginController {

    routeAuthenticate(req, res) {
        UsersRepository.getByPassAndUsernameOrEmail(req.body.useroremail, req.body.password, (status, data) => {
            if (!status) {
                return res.send({status, data});
            }
            let token = Auth.make(data.toObject());
            return res.send({status, token});
        });
    }

}

module.exports = new LoginController();
