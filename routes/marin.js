var express = require('express');
var router = express.Router();

/* GET marin page. */
router.get('/', function(req, res, next) {
    res.render('marin', { title: 'AGATE Sustainable Farming' });
});

module.exports = router;
