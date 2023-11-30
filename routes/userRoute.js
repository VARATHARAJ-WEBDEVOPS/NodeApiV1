const express = require('express');
 const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controlers/userControler');

const router = express.Router();

//creare a product
router.post('/', createUser );

//get a product by ID
router.get('/:id', getUser );
 
//get all products
router.get('/', getUsers ); 

//update a product
router.put('/:id', updateUser );

//delete a product 
router.delete('/:id', deleteUser );


module.exports = router; 