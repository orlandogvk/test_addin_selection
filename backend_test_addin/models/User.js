const { Schema, model } = require('mongoose');

const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase:true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    refreshToken: {
        type: String,
        default: null
    },
    resetToken:{
        type: String,
        default: null
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('User', userSchema);