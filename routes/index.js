var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.device.type.toUpperCase() == 'PHONE'){
    res.render('index_mobile', { title: 'Yoon Jung' });
  }else{
    res.render('index', { title: 'Yoon Jung' });
  }
});

module.exports = router;
