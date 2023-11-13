const Product = require("../models/product.model")
const Image = require("../models/image.model")

const createProduct = async (req, res) => {
    try {
        const { product_name, product_quantity, product_category, product_price, product_images } = req.body;


        // Fetch image details based on the provided image ID
        const fetchedImage = await Image.findById(product_images._id);

        const result = new Product({
            product_name,
            product_category,
            product_quantity,
            product_price,
            product_images: fetchedImage // Store complete image details
        });

        result.save()
            .then((data) => {
                res.status(201).json(data);
                return;
            })
            .catch((err) => {
                res.status(401).send(err);
                return;
            });
    } catch (error) {
        res.status(500).send(`Internal server error: ${error}`);
        return;
    }
};



const getAllProducts = async (req, res) => {
    try {
        const data = await Product.find().populate('product_images');
        res.status(200).send(data)
        return;
    } catch (error) {
        res.status(401).send(error)
        return;
    }
}

const removeOneProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Product.findByIdAndDelete(id)
        if (!data) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).send(`removed!`)
        return;
    } catch (error) {
        res.status(401).send(error)
        return;
    }
}

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id; // Assuming the ID is received through the URL params
        const { product_name, product_quantity, product_category, product_price, product_images } = req.body;

        const updateFields = {};

        // Check and update each field if provided in the request
        if (product_name) {
            updateFields.product_name = product_name;
        }

        if (product_quantity) {
            updateFields.product_quantity = product_quantity;
        }

        if (product_category) {
            updateFields.product_category = product_category;
        }

        if (product_price) {
            updateFields.product_price = product_price;
        }

        if (product_images) {
            updateFields.product_images = product_images;
        }

        const updatedProduct = await Product.findByIdAndUpdate(id, updateFields, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).send(`Internal server error: ${error}`);
    }
};


const getOneProduct = async (req, res) => {
    try {
        const productId = req.params.product_id;
        const data = await Product.findById(productId).populate('product_images');
        if (!data) {
            res.status(400).json({ message: `no product present` })
            return;
        }
        res.status(200).send(data)
        return;
    } catch (error) {
        res.status(401).send(error)
        return;
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    removeOneProduct,
    getOneProduct,
    updateProduct
}