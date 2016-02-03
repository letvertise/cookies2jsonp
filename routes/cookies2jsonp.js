var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var result = req.cookies;
    result['cip'] = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.setHeader('content-type', 'text/javascript');
    res.jsonp(result);
});

module.exports = router;
