var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Vivi Portfolio' });
});

router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About this page Viviana' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Viviana' });
});

module.exports = router;
