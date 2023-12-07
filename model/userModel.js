const mongoose = require('mongoose');

const userShcema = mongoose.Schema(
    {
        name: {
            type: String
        },
        password: {
            type: String
        },
        phone: {
            type: Number
        },
        profileImage: {
            type: String
        }
    },
    {
        timestamps: true
    }
)


const Users = mongoose.model('users', userShcema)

module.exports = Users;