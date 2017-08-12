var express = require('express');
var router = express.Router();
var cAuth_mechanic = require('../controller/cAuth_mechanic');

router.post('/login', cAuth_mechanic.do_login_mechanic);
router.post('/logout/:id', cAuth_mechanic.do_logout_mechanic);

module.exports = router;