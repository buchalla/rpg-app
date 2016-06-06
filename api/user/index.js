'use strict';
const router = require("express").Router();
const UsersController = require(`${configs.folder.controller}UsersController`);

router.get('/', UsersController.routeGet);

router.get('/:user_id', UsersController.routeGetById);

router.post('/', UsersController.routePost);

router.put('/:user_id', UsersController.routePut);

router.delete('/:user_id', UsersController.routeDelete);

router.post('/login', UsersController.routeLogin);

module.exports = router;
