const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    district: { type: String, required: true },
    state: { type: String, required: true },
    orders: [
        {
            product: { type: String, required: true },
            quantity: { type: Number, required: true },
        },
    ],
    forecast: { type: String },
    generatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Report', reportSchema);
