'use strict';
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    RouterLoader = require('./helpers/RouterLoader'),
    morgan = require('morgan'),
    mongoose = require('mongoose');
global.configs = require('./configs');

// Get infos from post and url parameters
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('dev')); // Log the requests in console

mongoose.connect(configs.database); // Connect to database

const rl = new RouterLoader(app, configs.folder.api);
rl.requireRecursively(); // Load all middlewares and routes inside the api folder

// Start de server
app.listen( process.env.PORT || 3000, () => {
    console.log('server listen on port', process.env.PORT || 3000);
});
