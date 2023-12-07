const express = require('express');
const { getUsers, getUser, createUser, updateUser, deleteUser, loginUser, existingUser } = require('../controlers/userControler');

const router = express.Router();

//creare a user
router.post('/', createUser );

//get a user by ID
router.get('/:id', getUser );
 
//get all user
router.get('/', getUsers ); 

//update a user
router.put('/:id', updateUser );

//delete a user 
router.delete('/:id', deleteUser );

// perform login
router.post('/login', loginUser);

// check existing user
router.post('/checkexistinguser', existingUser);


module.exports = router; 