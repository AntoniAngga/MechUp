var express = require('express');
var router = express.Router();
var cOrder = require('../controller/cOrder');

/* GET home page. */
router.get('/', cOrder.findall_get);
router.get('/:id', cOrder.findbyid_get);
router.post('/', cOrder.create_post);
router.put('/:id', cOrder.edit_put);
router.delete('/:id', cOrder.destory_delete);

module.exports = router;