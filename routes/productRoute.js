const express = require('express');
const Product = require('../model/productModel');
 const { getProducts, getProduct, createProduct, updateProduct, deletePeoject } = require('../controlers/productControler');

const router = express.Router();

//creare a product
router.post('/', createProduct );

//get a product by ID
router.get('/:id', getProduct );

//get all products
router.get('/', getProducts ); 

//update a product
router.put('/:id', updateProduct );

//delete a product 
router.delete('/:id', deletePeoject );


module.exports = router; 