const mongoose = require("mongoose")
const schema = mongoose.Schema;

const cartSchema = new schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Products'
            },
            quantity: {
                type: Number,
                default: 1,
            }
        }
    ]
})

const Cart = mongoose.model('Cart', cartSchema)
module.exports = Cart;