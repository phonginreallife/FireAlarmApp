const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false
    },
    verificationToken: String,

    addresses: [
        {
            name: String,
            mobileNo: String,
            RoomNo: String,
            street: String,
            landmark: String,
            city: String,
            country: String,
        }
    ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
