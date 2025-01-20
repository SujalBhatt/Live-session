const User = require("../models/userModel")
const signUp = async (req, res) => {
    try {
         const { name, email, password, dateOfBirth } = req.body
         const user = await User.findOne({email})
         if (user) {
             return res.status(400).send("User already exists")
         }

         const newUser = new User({
            name,
            email, 
            password,
            dateOfBirth
         })
        await newUser.save()
        res.status(201)
        .send({data: newUser, msg: "User created successfully"})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {signUp}