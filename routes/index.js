var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('requested /')
  res.render('index', { title: 'Yoon Jung' });
});

module.exports = router;
