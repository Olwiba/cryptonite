var express = require('express');
var encryptjs = require('encryptjs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('decrypt');
});

router.post('/', function(req, res, next) {
	var decrypted = req.body
	decrypted.textInput = encryptjs.decrypt(decrypted.textInput, decrypted.keyInput, 256)
  res.render('decrypted', decrypted);
});

module.exports = router;
