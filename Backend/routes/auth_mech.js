var express = require('express');
var router = express.Router();
var cAuth_mechanic = require('../controller/cAuth_mechanic');

router.post('/login', cAuth_mechanic.do_login_mechanic);
router.post('/logout/:id', cAuth_mechanic.do_logout_mechanic);
router.get('/login/role/mechanic', cAuth_mechanic.get_login_mechanic);
router.get('/login/role/mechanic/:id', cAuth_mechanic.get_login_mechanic_by_id);

module.exports = router;