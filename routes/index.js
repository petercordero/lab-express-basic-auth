var express = require('express');
var router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/main', (req, res, next) => {
  res.render('catPage.hbs')
})

router.get('/private', (req, res, next) => {
  res.render('gifPage.hbs')
})
module.exports = router;