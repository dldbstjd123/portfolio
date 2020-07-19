var express = require('express');
var router = express.Router();
var mobile = require('is-mobile');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(mobile){
    res.render('index_mobile', { title: 'Yoon Jung' });
  }else{
    res.render('index', { title: 'Yoon Jung' });
  }
});

module.exports = router;
