var express = require('express');
var router = express.Router();

/* GET environImpacts page. */
router.get('/', function(req, res, next) {
    res.render('environImpacts', { title: 'AGATE Sustainable Farming' });
});

module.exports = router;
