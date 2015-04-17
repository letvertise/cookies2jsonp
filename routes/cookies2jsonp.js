var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.setHeader('content-type', 'text/javascript');
    res.jsonp(req.cookies);
});

module.exports = router;
