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
        UsersRepository.update(req.params.user_id, req.body, (status, data) => {
            return res.send({status, data});
        });
    }

    routeDelete(req, res) {
        UsersRepository.delete(req.params.user_id, (status, data) => {
            return res.send({status, data});
        });
    }

}

module.exports = new UsersController();
