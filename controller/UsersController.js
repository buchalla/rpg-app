'use strict';
const UsersRepository = require(`${configs.folder.repository}UsersRepository`);

class UsersController {

    routeGet(req, res) {
        UsersRepository.get((status, data) => {
            return res.send({status, data});
        });
    }

    routeGetById(req, res) {
        UsersRepository.getById(req.params.user_id, (status, data) => {
            return res.send({status, data});
        });
    }

    routePost(req, res) {
        if (!req.body.username || !req.body.email || !req.body.password) {
            return res.send({status: false, data: "Parameters 'username', 'email' and 'password' are mandatory"})
        }
        let user = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        };
        UsersRepository.insert(user, (status, data) => {
            return res.send({status, data});
        });
    }

    routePut(req, res) {
        UsersRepository.update(req.auth._id, req.body, (status, data) => {
            return res.send({status, data});
        });
    }

    routeDelete(req, res) {
        UsersRepository.delete(req.auth._id, (status, data) => {
            return res.send({status, data});
        });
    }

}

module.exports = new UsersController();
