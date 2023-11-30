const mongoose = require('mongoose');

const userShcema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"]
        },
        phoneNumber: {
            type: Number,
            required: true,
        },
        profileImage: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)


const Users = mongoose.model('users', userShcema)

module.exports = Users;