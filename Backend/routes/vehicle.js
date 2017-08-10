var express = require('express');
var router = express.Router();
var cVehicle = require('../controller/cVehicle');

/* GET home page. */
router.get('/', cVehicle.findall_get);
router.get('/:id', cVehicle.findbyid_get);
router.post('/', cVehicle.create_post);
router.put('/:id', cVehicle.edit_put);
router.delete('/:id', cVehicle.destory_delete);

module.exports = router;