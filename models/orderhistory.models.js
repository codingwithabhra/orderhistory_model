const mongoose = require("mongoose");

const orderhistorySchema = new mongoose.Schema({
    products: [
        {
            productId: String,
            productName: String,
            quantity: Number,
            price: Number,
            variant: {
                color: String,
                ram: String,
                storage: String,
            },
        },
    ],
    totalAmount: Number,
    selectedAddress: {
        name: String,
        phone: String,
        addressLine: String,
        city: String,
        state: String,
        pincode: String,
    },
    orderDate: {
        type: Date,
        default: Date.now,
    },
},
    { timestamps: true }
);

const orderhistoryData = mongoose.model("orderhistoryData", orderhistorySchema);

module.exports = orderhistoryData;