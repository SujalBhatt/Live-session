const express = require("express")
const app = express()
const connectDB = require("./config/db")
const userRoute = require("./routes/userRoute")



app.use(express.json())

app.get("/", (req, res) => {
    try {
        res.send("Hello World")
        console.log("My first API is working")
    } catch(error) {
        res.status(500).send(error.message)
    }
})


app.use("/api", userRoute)

app.listen(8000, async () => {
    try {
        await connectDB()
        console.log("Server is running on port 8080")
    } catch (error) {
        console.error(error.message)    
    }
})