const mongoose = require("mongoose");


const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

const User = mongoose.model("User" , usersSchema);

module.exports = User;