var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res) {
  res.send('logged in as ' + req.params.id);
});

module.exports = router;
