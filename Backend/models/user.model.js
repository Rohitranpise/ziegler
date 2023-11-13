const mongoose = require("mongoose")
const schema = mongoose.Schema;

const userSchema = new schema({
    username: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['buyer', 'seller'],
        default: 'buyer' // Default value is 'buyer'
    }
});

const User = mongoose.model("User", userSchema)

module.exports = User;