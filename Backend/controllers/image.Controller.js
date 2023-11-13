const Image = require('../models/image.model');
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: './public/uploads/images/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
// Initialize upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 50000000 }, // Limit file size to 50MB
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('image'); // Name of input field for file upload


// Check file type
function checkFileType(file, cb) {
    // Allowed extensions
    const filetypes = /jpeg|jpg|png|gif/;

    // Check extension
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    // Check mime type
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images only!');
    }
}


const uploadImage = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal Server Error');
                return;
            }

            if (!req.file) {
                res.status(400).json({ message: 'No file uploaded.' });
                return;
            }

            let filePath = req.file.path.replace('public', process.env.SERVER_URL);

            if (!req.file.filename) {
                res.status(400).send('Upload Failed');
                return;
            }

            let image = new Image({
                data: req.file.buffer,
                contentType: req.file.mimetype,
            });

            const result = await image.save();

            // Construct the imageUrl using the server URL and the image ID
            const imageUrl = `${process.env.SERVER_URL}/${result._id}`;

            // Update imageUrl field in the saved image document
            result.imageUrl = imageUrl;
            await result.save();

            // Send a response with imageUrl included
            res.status(200).json({ message: 'Image uploaded successfully.', imageUrl, imageId: result._id });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};




const getAllImages = async (req, res) => {
    try {
        const data = await Image.find()
        res.status(200).send(data)
        return;
    } catch (error) {
        res.status(401).send(error)
        return;
    }
}


const getImageById = async (req, res) => {
    try {
        const image = await Image.findById(req.params.id);

        if (!image) {
            return res.status(404).json({ message: 'Image not found.' });
        }

        res.set('Content-Type', image.contentType);
        res.send(image);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

const deleteAllImages = async (req, res) => {
    try {
        const data = await Image.deleteMany();
        res.status(200).send(`deleted all images!`)
        return;
    } catch (error) {
        res.status(401).send(error)
        return;
    }
}

module.exports = {
    uploadImage,
    getAllImages,
    deleteAllImages,
    getImageById
};
