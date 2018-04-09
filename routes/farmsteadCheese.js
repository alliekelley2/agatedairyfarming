var express = require('express');
var router = express.Router();

/* GET farmsteadCheese page. */
router.get('/', function(req, res, next) {
    res.render('farmsteadCheese', { title: 'AGATE Sustainable Farming' });
});

module.exports = router;
