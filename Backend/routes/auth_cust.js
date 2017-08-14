var express = require('express');
var router = express.Router();
var cAuth_customer = require('../controller/cAuth_customer');

router.post('/login', cAuth_customer.do_login_customer);
router.post('/logout/:id', cAuth_customer.do_logout_customer);
router.get('/role', cAuth_customer.get_login_customer);
router.get('/role/:id', cAuth_customer.get_login_customer_by_id);
router.get('/id_customer/:id', cAuth_customer.get_login_customer_by_customer_id);
router.put('/update_status/:id', cAuth_customer.update_login_customer);


module.exports = router;