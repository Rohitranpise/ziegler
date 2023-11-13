const express = require('express');
const router = express.Router();
const addToCartController = require('../controllers/cart.Controller');
const { checkRoleBuyer } = require("../middlewares/user.middleware")

// Route to add a product to the user's cart
router.post('/add-to-cart', checkRoleBuyer, addToCartController.addToCart);

router.get('/view-cart', checkRoleBuyer, addToCartController.showCartByUserId);

module.exports = router;
