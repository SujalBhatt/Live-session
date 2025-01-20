const express = require("express")
const Router = express.Router()

const {signUp} = require("../controllers/userController")

Router.post("/signup", signUp)

module.exports = Router