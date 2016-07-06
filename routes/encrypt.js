var express = require('express');
var encryptjs = require('encryptjs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('encrypt');
});

router.post('/', function(req, res, next) {
	console.log('The Req: ', req.body.textInput)
	var encrypted = req.body
	encrypted.textInput = encryptjs.encrypt(encrypted.textInput, encrypted.keyInput, 256)
	console.log('The ncrpyt: ', encrypted.textInput)
  res.render('encrypted', encrypted);
});

// router.get('/encrypted', function(req, res, next) {
// 	res.render('')
// });

module.exports = router;
