var express = require('express');
var router = express.Router();
var cAuth_mechanic = require('../controller/cAuth_mechanic');

router.post('/login', cAuth_mechanic.do_login_mechanic);
router.post('/logout/:id', cAuth_mechanic.do_logout_mechanic);
router.get('/role/', cAuth_mechanic.get_login_mechanic);
router.get('/role/:id', cAuth_mechanic.get_login_mechanic_by_id);
router.put('/update_status/:id', cAuth_mechanic.update_login_mechanic);
router.get('/id_mechanic/:id', cAuth_mechanic.get_login_mechanic_by_mechanic_id);

module.exports = router;