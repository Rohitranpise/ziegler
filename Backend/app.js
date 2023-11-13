const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const userRouter = require("./routes/user.Routes");
const productRouter = require("./routes/product.Routes")
const imageRouter = require("./routes/image.Routes")
const cartRouter = require("./routes/cart.Routes")
const bodyParser = require("body-parser")

//body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//cors
app.use(cors())

//database connection
mongoose.connect(`mongodb+srv://Rohit:Rohit007@cluster0.e6s0cxu.mongodb.net/`);

const db = mongoose.connection;
db.on('error', (error) => {
    console.log(`error in connection: ${error}`)
});

db.once('connected', () => {
    console.log(`connected to mongodb`)
});
app.get("/", (req, res) => {
    res.send(`this is sever`)
});

//including router
app.use("/", userRouter)
app.use('/', productRouter)
app.use("/", imageRouter)
app.use("/", cartRouter)



app.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
});