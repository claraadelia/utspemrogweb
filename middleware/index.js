var express = require('express');
var auth = require('./auth');
var router = express.Router();


// daftar menu registrasi 
router.post('/user/register', auth.registrasi);
router.post('/user/login', auth.login);

module.exports = router;