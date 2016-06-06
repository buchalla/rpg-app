'use strict';
module.exports = {
    folder: {
        api: `${__dirname}/api/`,
        middleware: `${__dirname}/middleware/`,
        controller: `${__dirname}/controller/`,
        helpers: `${__dirname}/helpers/`,
        model: `${__dirname}/model/`,
        repository: `${__dirname}/repository/`,
        bo: `${__dirname}/bo/`
    },
    database: "mongodb://localhost/rpg",
    secret: 'shhhhitssecret'
};
