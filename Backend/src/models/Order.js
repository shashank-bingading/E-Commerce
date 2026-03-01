const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    // The orderItems field is an array of objects, where each object represents a product in the order. Each product has a name, quantity, price, and a reference to the Product model.
    orderItems: [{
        name: {type: String, required: true},
        qty: {type: Number, required: true},
        price: {type: Number, required: true},
        product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    }],
    shippingAddress: {
        address: {type: String, required: true},
        city: {type: String, required: true},
        postalCode: {type: String, required: true},
        country: {type: String, required: true},
    },
    paymentMethod: {type: String, required: true},
    paymentResult: {
        id: {type: String},
        status: {type: String},
        update_time: {type: String},
        email_address: {type: String},
    },
    itemsPrice: {type: Number, required: true, default: 0.0},
    taxPrice: {type: Number, required: true, default: 0.0},
    shippingPrice: {type: Number, required: true, default: 0.0},
    totalPrice: {type: Number, required: true, default: 0.0},
    isPaid: {type: Boolean, required: true, default: false},
    paidAt: {type: Date},
    isDelivered: {type: Boolean, required: true, default: false},
    deliveredAt: {type: Date},
}, {timestamps: true});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;