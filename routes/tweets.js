var express = require('express');
var router = express.Router();

var Twitter = require('twitter');

var twitter = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

/* GET users listing. */
router.get('/', function (req, res) {
  var q = req.query.q || 'javascript';
  twitter.get('search/tweets', { q: q }, function(error, tweets, response){
    res.render('tweets', tweets);
    //res.render('tweets', { title: 'Tweets', tweets: tweets });
  });
});
module.exports = router;
