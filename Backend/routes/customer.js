var express = require('express');
var router = express.Router();
var cCustomer = require('../controller/cCustomer');

router.get('/', cCustomer.findall_get)
router.post('/', cCustomer.create_post);
router.get('/:id', cCustomer.findbyid_get);
router.put('/:id', cCustomer.edit_put);
router.delete('/:id', cCustomer.destory_delete);

module.exports = router;