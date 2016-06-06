'use strict';
const UsersRepository = require(`${configs.folder.repository}UsersRepository`);

class UsersController {

    routeGet(req, res) {
        UsersRepository.get((status, users) => {
            return res.send({status: status, data: users});
        });
    }

    routeLogin(req, res) {
        UsersRepository.getByPassAndUsernameOrEmail(req.body.useroremail, req.body.password, (status, data) => {
            return res.send({status: status, data: data});
        });
    }

    routeGetById(req, res) {
        UsersRepository.getById(req.params.user_id, (status, user) => {
            return res.send({status: status, data: user});
        });
    }

    routePost(req, res) {
        let user = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        };
        UsersRepository.insert(user, (status, data) => {
            return res.send({status: status, data: data});
        });
    }

    routePut(req, res) {
        UsersRepository.update(req.params.user_id, req.body, (status, data) => {
            return res.send({status: status, data: data});
        });
    }

    routeDelete(req, res) {
        UsersRepository.delete(req.params.user_id, (status, data) => {
            return res.send({status: status, data: data});
        });
    }

}

module.exports = new UsersController();
