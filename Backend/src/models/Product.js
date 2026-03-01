const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,},
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {type: String, required: true},
    category: {type: String, required: true},
    stock: {type: Number, required: true},
    rating: {type: Number, default: 0},
}, {timestamps: true});
//the timestamps option adds createdAt and updatedAt fields to the schema, which will automatically be managed by Mongoose.

const Product = mongoose.model('Product', productSchema);

module.exports = Product;