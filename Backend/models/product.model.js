const mongoose = require("mongoose")
const CATEGORY = require("../constants/product.Constant")
const schema = mongoose.Schema;

const productSchema = new schema({
    product_name: {
        type: String,
        required: true,
    },
    product_quantity: {
        type: Number,
        required: true
    },
    product_category: {
        type: String,
        required: true,
        enum: CATEGORY,
    },
    product_price: {
        type: Number,
        required: true,
    },
    product_images: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image",
        required: true
    },
})

const Product = mongoose.model("Products", productSchema)
module.exports = Product;