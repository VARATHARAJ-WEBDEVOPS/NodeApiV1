const mongoose = require('mongoose');

const productShcema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please entera product name"]
        },
        quantity: {
            type: Number,
            required: [true],
            default: 0
        },
        price: {
            type: Number,
            required: true,
        },
        measurement: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)


const Products = mongoose.model('Product', productShcema)

module.exports = Products;