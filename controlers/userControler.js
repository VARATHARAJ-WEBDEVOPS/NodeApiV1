const UserModel = require('../model/userModel');
const asyncHandler = require('express-async-handler');

//get all Users
const getUsers = async (req, res) => {
    try {
        const User = await UserModel.find({});
        res.status(200).json(User)
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
}

//get a single User
const getUser = asyncHandler( async (req, res) => {
    try {
        const { id } = req.params;
        const User = await UserModel.findById(id);
        res.status(200).json(User);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

//create a User
const createUser = asyncHandler( async (req, res) => {
    try {
        const User = await UserModel.create(req.body)
        res.status(200).json(User);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

//update a User 
const updateUser = asyncHandler( async (req, res) => {
    try {
        const { id } = req.params;
        const User = await UserModel.findByIdAndUpdate(id, req.body);
        //cannot update find any User in database
        if (!User) {
            res.status(404);
            throw new Error(`cnanot find any User with ID ${id}` );
        }
        const updatedUser = await UserModel.findById(id);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

//delete a User
const deleteUser = asyncHandler( async(req, res) => {
    try {
        const {id} = req.params;
        const User = await  UserModel.findByIdAndDelete(id);
        if (!User) {
            res.status(404);
        throw new Error(`cnanot find any User with ID ${id}` );
        }
        res.status(200).json(Product);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}