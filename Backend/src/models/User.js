import mongoose from 'mongoose';

import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,},
    isAdmin: {type: Boolean, default: false},
}, {timestamps: true});

// Hash the password before saving the user
// I'll add it later

const User = mongoose.model('User', userSchema);

export default User;