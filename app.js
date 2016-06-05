'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
GLOBAL.configs = require('./configs');
const RouterLoader = require('./helpers/RouterLoader');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rpg');

const rl = new RouterLoader(app, configs.folder.api);
rl.requireRecursively();

app.listen( process.env.PORT || 3000, () => {
    console.log('server listen on port', process.env.PORT || 3000);
});
