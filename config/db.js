const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.connect("mongodb+srv://vimlabhatt97:KVSs75@cluster0.q8t0m.mongodb.net/live-session")
        console.log('MongoDB Connected')
    } catch (error) {
        console.error(error.message)
    } }

module.exports = connectDB