const mongoose = require("mongoose");
require("dotenv").config();
console.log(process.env.MONGODB_URI)

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB connection SUCCESS");
    } catch (error) {
        console.error("MongoDB connection FAIL");
        process.exit(1);
    }
}
module.exports = connectDB;