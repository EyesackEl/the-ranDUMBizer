const { Schema, model } = require('mongoose');
const List = require('./list')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
  lists: [List.Schema]
});

const User = model('User', userSchema);

module.exports = User;