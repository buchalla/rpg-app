'use strict';
const Users = require(`${configs.folder.model}Users`);
const Hash = require(`${configs.folder.helpers}Hash`);


class UsersRepository {

    get(cb) {
        Users.find((err, users) => {
            if (!users)
                return cb(false, 'No data found!');
            else if (err)
                return cb(false, err);
            else
                return cb(true, users);
        });
    }

    getById(id, cb) {
        Users.findById(id, (err, user) => {
            if (!user)
                return cb(false, 'No data found!');
            else if (err)
                return cb(false, err);
            else
                return cb(true, user);
        });
    }

    getByPassAndUsernameOrEmail(useroremail, password, cb) {
        password = Hash.make(password);
        Users.findOne({$or: [{username: useroremail}, {email: useroremail}]})
        .and({password: password})
        .exec((err, user) => {
            if (!user)
                return cb(false, 'No data found!');
            else if (err)
                return cb(false, err);
            else
                return cb(true, user);
        });
    }

    insert(data, cb) {
        data.password = Hash.make(data.password);
        let user = new Users(data);
        user.save((err) => {
            if (err)
                return cb(false, err);
            else
                return cb(true, 'User created!');
        });
    }

    update(id, data, cb) {
        Users.findById(id, (err, user) => {
            if (err)
                throw err;
            if (!user)
                return cb(false, 'No data found!');
            try {
                for (var key in data) {
                    if (key === 'password') {
                        data[key] = Hash.make(data[key]);
                    }
                    if (user[key]) {
                        user[key] = data[key];
                    }
                }
                user.save((err) => {
                    if (err)
                        return cb(false, err);
                    else
                        return cb(true, 'User updated!');
                });
            } catch (e) {
                return cb(false, e.message);
            }
        });
    }

    delete(id, cb) {
        Users.remove({
            _id: id
        }, (err, user) => {
            if (err)
                return cb(false, err);
            else
                return cb(true, 'User removed!');
        });
    }
}

module.exports = new UsersRepository();
