const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 5,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        min: 1,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAvatarImageSet: {
        type: Boolean,
        default: false,
    },
    avatar: {
        type: String,
        default: "",
    },
    gender: {
        type: String,
        default: "Other",
    },
    aboutme: {
        type: String,
        default: "",
        max: 300,
    },
    requestList: [mongoose.Schema.Types.ObjectId],
    friendList: [mongoose.Schema.Types.ObjectId],

});

module.exports = User = mongoose.model('user', userSchema)