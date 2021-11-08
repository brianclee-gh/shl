const router = require('express').Router();

router.get('/', function(req, res) {
  res.send('lol');
})

module.exports = router;