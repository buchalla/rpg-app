'use strict';
const crypto = require('crypto');

class Hash {

    constructor() {
        this.hashType = 'sha256';
        this.secret = 'hide in commit';
    }

    make(str) {
        return crypto.createHmac(this.hashType, this.secret).update(str).digest('hex');
    }

    compare(hash, pass) {
        return hash === crypto.createHmac(this.hashType, this.secret).update(pass).digest('hex');
    }

}

module.exports = new Hash();
