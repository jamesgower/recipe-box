const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const userSchema = new Schema({
    googleID: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    name: String,
    img: String
});

mongoose.model('users', userSchema);