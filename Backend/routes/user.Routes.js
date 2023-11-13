const express = require("express")
const router = express.Router()
const userController = require("../controllers/user.Controller")
const { authJwt } = require("../middlewares/user.middleware")

router.post("/user", userController.createUser)

router.get("/user", userController.getUsers)

router.delete("/user", userController.deleteAllUsers)

router.post("/user/login", userController.userSignIn)

//protected routes

router.get("/user/protect", authJwt, (req, res) => {
    res.send('This is a protected route!');
})

module.exports = router;