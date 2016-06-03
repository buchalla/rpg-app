'use strict';
const express = require('express');
const app = express();
const RouterLoader = require('./helpers/RouterLoader');
const configs = require('./configs');
const mongoose = require('mongoose');
const rl = new RouterLoader(app, configs.folder.api);
rl.requireRecursively();


app.listen( process.env.PORT || 3000, () => {
    console.log('server listen on port', process.env.PORT || 3000);
});