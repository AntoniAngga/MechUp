var express = require('express');
var router = express.Router();
var cMechanic = require('../controller/cMechanic');

/* GET home page. */
router.get('/', cMechanic.findall_get);
router.get('/:id', cMechanic.findbyid_get);
router.post('/', cMechanic.create_post);
router.put('/:id', cMechanic.edit_put);
router.delete('/:id', cMechanic.destory_delete);

module.exports = router;