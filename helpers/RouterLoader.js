'use strict';
const fs = require('fs');
const path = require('path');

module.exports = class RouterLoader {
    
    constructor(app, routerFolder) {
        this.app = app;
        this.routerFolder = routerFolder;
    }
    
    requireRecursively(dir) {
        dir = dir || this.routerFolder;
        
        fs.readdir(dir, (err, folders) => {
            if(err) throw err;
            
            folders.forEach( (folder) => {
                let fullPath = path.join(dir,folder);
                this.validateAndRequire(fullPath);
            });
        });
    }
    
    validateAndRequire(fullPath) {
        fs.lstat(fullPath, (err, stat) => {
            if(err) throw err;
           
            if(stat.isDirectory()) {
                this.requireRecursively(fullPath);
            } else {
                let useUrl = this.getUrlFromFile(fullPath);
                this.app.use(useUrl, require(fullPath));
            }
        });
    }
    
    getUrlFromFile(path) {
        let url = path.replace(this.routerFolder, "").replace(".js", "");
        let arrUrl = url.split("/");
        if(arrUrl[arrUrl.length - 1] === "index") {
            arrUrl.pop();
        }
        return `/${arrUrl.join('/')}`;
    }
}

