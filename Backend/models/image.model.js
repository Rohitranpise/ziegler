const mongoose = require("mongoose");
const schema = mongoose.Schema;

const imageSchema = new schema({
    data: Buffer,
    contentType: String,
    imageUrl: String
});

const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
