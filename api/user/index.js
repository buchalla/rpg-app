'use strict';
const router = require("express").Router();
const { routeGet, routeGetById, routePut, routeDelete } = require(`${configs.folder.controller}UsersController`);

// List all users
router.get('/', routeGet);

// Get user by id
router.get('/:user_id', routeGetById);

// Alter user by id
router.put('/:user_id', routePut);

// Remove user by id
router.delete('/:user_id', routeDelete);

module.exports = router;
