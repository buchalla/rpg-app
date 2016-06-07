'use strict';
const router = require("express").Router();
const { routeGet, routeGetById, routePut, routeDelete } = require(`${configs.folder.controller}UsersController`);

// List all users
router.get('/', routeGet);

// Get user by id
router.get('/:user_id', routeGetById);

// Alter user by token
router.put('/', routePut);

// Remove user by token
router.delete('/', routeDelete);

module.exports = router;
