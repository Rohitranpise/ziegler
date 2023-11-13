const express = require("express")
const router = express.Router();
const productController = require("../controllers/product.Controller")
const { checkRoleSeller } = require("../middlewares/user.middleware")

router.post("/product", checkRoleSeller, productController.createProduct)

router.get("/product", productController.getAllProducts)

router.delete("/product/:id", productController.removeOneProduct)

router.get("/product/:id", productController.getOneProduct)

router.put("/product/:id", productController.updateProduct)

module.exports = router;