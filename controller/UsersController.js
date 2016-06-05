'use strict';
const Users = require(`${configs.folder.model}users`);

class UsersController {

    routeGet(req, res) {
        Users.find((err, data) => {
            if (err)
                res.send({status: false, data: err});
            else
                res.send({status: true, data: data});
        });
    }

    routeGetById(req, res) {
        Users.findById(req.params.user_id, (err, data) => {
            if (err)
                res.send({status: false, data: err});
            else
                res.send({status: true, data: data});
        });
    }

    routePost(req, res) {
        let user = new Users({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        user.save((err) => {
            if (err)
                res.send({status: false, data: err});
            else
                res.send({status: true, data: 'User created!'});
        });
    }

    routePut(req, res) {
        Users.findById(req.params.user_id, (err, data) => {
            if (err)
                throw err;
            try {
                for (var key in req.body) {
                    if (data[key]) {
                        data[key] = req.body[key];
                    }
                }
                data.save((err) => {
                    if (err)
                        res.send({status:false, data:err});
                    else
                        res.send({status: true, data:'User updated!'});
                });
            } catch (e) {
                res.send({status: false, data: e.message});
            }
        });
    }

    routeDelete(req, res) {
        Users.remove({
            _id: req.params.user_id
        }, (err, data) => {
            if (err)
                res.send({status: false, data: data});
            else
                res.send({status: true, data: data});
        });
    }

}

module.exports = new UsersController();
