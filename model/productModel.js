const mongoose = require('mongoose');

const productShcema = mongoose.Schema(
    {
        productname: {
            type: String
        },
        quantity: {
            type: String
        },
        category: {
            type: String
        },
        price: {
            type: Number
        },
        stock: {
            type: Number
        },
        imgUrl: {
            type: String
        }
    },
    {
        timestamps: true
    }
)


const Products = mongoose.model('Product', productShcema)

module.exports = Products;