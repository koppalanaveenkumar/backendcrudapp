const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!

const product_controller = require('../controllers/product.controller');
router.get('/test', product_controller.test);
router.post('/create', product_controller.create);
router.get('/getList',product_controller.getList);
router.get('/getById/:id', product_controller.getById);
router.put('/updateById/:id', product_controller.updateById);
router.delete('/deleteById/:id', product_controller.deleteById);
module.exports = router;

