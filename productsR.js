 
const express = require ('express');
const { register, login } = require('./authC');
// const createProduct = require('createProduct');
// const updateProduct = require('updateProduct');
// const getProducts = require('getProducts');
// const deleteProduct = require('deleteProduct');
// const paginatedResults = require('paginatedResults');
const controller = require('./productsC')

const router = express.Router();

router.post("/register" , register)
router.post("/login" , login)


router.get('/',  controller.getProducts );
router.post('/create' , controller.createProduct );
router.patch('/update' ,controller.updateProduct );
router.delete('/delete' ,controller.deleteProduct );
module.exports = router; 