// BASICS ROUTES - Without auth middleware
'use strict';
const router = require("express").Router();
const { routeAuthenticate, routeTest } = require(`${configs.folder.controller}LoginController`);
const { routePost } = require(`${configs.folder.controller}UsersController`);
const AuthMiddleware = require(`${configs.folder.middleware}AuthMiddleware`);

// Get auth token base on username or email and passowrd
router.post('/login', routeAuthenticate);

// Create new user account
router.post('/user', routePost);

// Middleware to all other routes
router.use(AuthMiddleware.basic);

module.exports = router;
