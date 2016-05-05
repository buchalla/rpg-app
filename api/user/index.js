const router = require("express").Router();

router.get('/', function(req, res){
    res.send("Router: user");
});

router.get('/vitor', (req, res) =>{
    res.send('vitor');
});

module.exports = router;