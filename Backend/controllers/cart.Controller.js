const Cart = require("../models/cart.modle")

const addToCart = async (req, res) => {
    const { productId } = req.body;
    const userId = req.user.id
    try {
        let cart = await Cart.findOne({ userId })

        if (!cart) {
            cart = new Cart({
                userId,
                products: [{ productId }]
            })
        } else {
            cart.products.push({ productId })
        }
        await cart.save();
        res.send('Product added to cart');
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).send('Error adding to cart');
    }
}



const showCartByUserId = async (req, res) => {
    const userId = req.user.id

    try {
        const cart = await Cart.findOne({ userId }).populate({
            path: 'products',
            populate: {
                path: 'productId', // Assuming 'productId' references the 'Product' model
                model: 'Products', // Name of the Product model
                select: 'product_name product_quantity product_category product_price' // Select the fields you want to populate
            }
        });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        res.json(cart);
    } catch (error) {
        console.error('Error fetching cart:', error);
        res.status(500).send('Error fetching cart');
    }
};

module.exports = {
    addToCart,
    showCartByUserId,
};
