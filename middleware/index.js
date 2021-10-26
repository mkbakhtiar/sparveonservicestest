var express = require('express');
var auth = require('./auth');
var router = express.Router();
var verifikasi = require('./verifikasi');

router.post('/api/v1/register', auth.register);
router.post('/api/v1/login', auth.login);

//route verification token
router.get('/api/v1/secure', verifikasi, auth.securePage);

module.exports = router;