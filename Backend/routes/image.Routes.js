const imageController = require("../controllers/image.Controller")
const express = require("express")
const router = express.Router()

router.post('/upload',imageController.uploadImage);

router.get('/upload',imageController.getAllImages);

router.get('/upload/:id',imageController.getImageById);

router.delete('/upload',imageController.deleteAllImages);



module.exports = router;