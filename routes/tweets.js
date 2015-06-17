var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
  res.render('tweets', { title: 'Tweets', message: 'These are your tweets' });
});
module.exports = router;
